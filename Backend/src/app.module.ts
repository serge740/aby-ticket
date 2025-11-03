// app.module.ts
import { Module } from '@nestjs/common';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import { AdminModule } from './Modules/admin/admin.module';

import { TestimonialModule } from './Modules/testmonial-management/testmonial.module';
import { BlogModule } from './Modules/Blog-management/blog.module';
import { ContactModule } from './Modules/Contact-us/contact.module';

import { EmailModule } from './Global/email/email.module';


import { CompanyModule } from './Modules/Company-management/company.module';
import { MenuItemModule } from './Modules/menu-management/menu-item/menu-item.module';
import { MenuCategoryModule } from './Modules/menu-management/menu-category/menu-category.module';
import { ClientAuthModule } from './Modules/client/auth/client-auth.module';
@Module({
  imports: [

    ConfigModule.forRoot({
      isGlobal: true, // so you don't have to import ConfigModule in every module
    }),
    EmailModule,
    CommonModule,
    AdminModule,
    TestimonialModule,
    BlogModule,
    ContactModule,

    CompanyModule,
    MenuItemModule,
    MenuCategoryModule,
    ClientAuthModule,
  ],
  controllers: [],
})
export class AppModule {}
