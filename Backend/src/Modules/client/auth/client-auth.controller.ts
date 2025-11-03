import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  Res,
  Param,
  Patch,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { ClientService } from './client-auth.service';
import { Response, Request } from 'express';
import { AuthGuard } from '@nestjs/passport';
import { ClientAuthGuard } from 'src/Guards/client-auth.guard';


@Controller('client')
export class ClientController {
  constructor(private readonly clientService: ClientService) {}

  // -----------------------------
  // REGISTER
  // -----------------------------
  @Post('register')
  async register(
    @Body()
    body: { name: string; email: string; phoneNumber: string; password: string },
  ) {
    return this.clientService.registerClient(body);
  }

  // -----------------------------
  // LOGIN
  // -----------------------------
  @Post('login')
  async login(@Body() body: { login: string; password: string }, @Res({ passthrough: true }) res: Response) {
    const { token, client } = await this.clientService.clientLogin(body);

    // Set cookie
    res.cookie('client_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    return { message: 'Login successful', client, token };
  }

  // -----------------------------
  // CHANGE PASSWORD
  // -----------------------------
  @UseGuards(ClientAuthGuard)
  @Patch('change-password/:id')
  async changePassword(
    @Param('id') id: string,
    @Body() body: { currentPassword: string; newPassword: string },
  ) {
    return this.clientService.changePassword(id, body.currentPassword, body.newPassword);
  }

  // -----------------------------
  // UPDATE CLIENT
  // -----------------------------
  @UseGuards(ClientAuthGuard)
  @Patch('update/:id')
  async updateClient(
    @Param('id') id: string,
    @Body()
    body: {
      name?: string;
      email?: string;
      phoneNumber?: string;
      password?: string;
      profileImage?: string;
      status?: 'ACTIVE' | 'INACTIVE';
    },
  ) {
    return this.clientService.updateClient(id, body);
  }

  // -----------------------------
  // DELETE CLIENT
  // -----------------------------
  @UseGuards(ClientAuthGuard)
  @Delete('delete/:id')
  async deleteClient(@Param('id') id: string) {
    return this.clientService.deleteClient(id);
  }

  // -----------------------------
  // LOGOUT
  // -----------------------------
  @UseGuards(ClientAuthGuard)
  @Post('logout/:id')
  async logout(@Param('id') id: string, @Res() res: Response) {
    await this.clientService.logout(res, id);

    // Clear cookie
    res.clearCookie('client_token', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
    });

    return { message: 'Logged out successfully' };
  }

  // -----------------------------
  // GOOGLE OAUTH LOGIN
  // -----------------------------
  @Get('google')
  @UseGuards(AuthGuard('google-client'))
  async googleLogin() {
    // Initiates Google OAuth flow
  }

  @Get('google/callback')
  @UseGuards(AuthGuard('google-client'))
  async googleCallback(@Req() req: any, @Res() res: Response) {
    const { client, token, redirect } = req.user as any;

    if (redirect) {
      // Redirect to frontend if OAuth failed
      return res.redirect(redirect);
    }

    // Set cookie
    res.cookie('client_token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });

    // Redirect to frontend or return client info
    const redirectUri = (req.query.state as string) || `${process.env.FRONTEND_URL_ONLY}/dashboard`;
    return res.redirect(`${redirectUri}?login=success`);
  }
}
