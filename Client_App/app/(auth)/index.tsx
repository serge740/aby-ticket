import React, { useState, useRef } from 'react';
import { 
  View, 
  Text, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  SafeAreaView,
  Dimensions,
  FlatList,
  Animated
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

// Import info
import info from '@/constants/info';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    id: '1',
    title: 'Track Your Packages',
    description: 'Get real-time updates on all your shipments and never miss a delivery',
    image: '📦',
    backgroundColor: '#E6F7F4'
  },
  {
    id: '2',
    title: 'Fast & Secure Delivery',
    description: 'Your packages are safe with us. We ensure secure and timely delivery every time',
    image: '🚚',
    backgroundColor: '#FFF4E6'
  },
  {
    id: '3',
    title: 'Easy Management',
    description: 'Manage all your shipments in one place with our intuitive interface',
    image: '📱',
    backgroundColor: '#F0E6FF'
  }
];

const OnboardingScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const slidesRef = useRef(null);

  const viewableItemsChanged = useRef(({ viewableItems }:{viewableItems:any[]}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const scrollTo = () => {
    if (currentIndex < slides.length - 1) {
      slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
    } else {
      handleGetStarted();
    }
  };

  const handleGetStarted = () => {
    router.push('/(auth)/login')
    // Navigate to login/register screen
  };

  const handleSkip = () => {
    console.log('Skip pressed');
    if( slidesRef.current){
        slidesRef.current.scrollToIndex({ index: slides.length - 1 })
    };
}

  const renderItem = ({ item }) => (
    <View style={[styles.slide, { width }]}>
      <View style={[styles.imageContainer, { backgroundColor: item.backgroundColor }]}>
        <Text style={styles.emoji}>{item.image}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  const Pagination = () => {
    return (
      <View style={styles.paginationContainer}>
        {slides.map((_, i) => {
          const inputRange = [(i - 1) * width, i * width, (i + 1) * width];
          
          const dotWidth = scrollX.interpolate({
            inputRange,
            outputRange: [8, 24, 8],
            extrapolate: 'clamp',
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });

          return (
            <Animated.View
              style={[
                styles.dot,
                { 
                  width: dotWidth, 
                  opacity,
                  backgroundColor: info.primary[500]
                }
              ]}
              key={i.toString()}
            />
          );
        })}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with Logo and Skip */}
      <View style={styles.header}>
        
        {currentIndex < slides.length - 1 && (
          <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
            <Text style={styles.skipText}>Skip</Text>
          </TouchableOpacity>
        )}
      </View>

      {/* Slides */}
      <FlatList
        data={slides}
        renderItem={renderItem}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        scrollEventThrottle={32}
        onViewableItemsChanged={viewableItemsChanged}
        viewabilityConfig={viewConfig}
        ref={slidesRef}
      />

      {/* Bottom Section */}
      <View style={styles.bottomContainer}>
        <Pagination />
        
        <TouchableOpacity 
          style={[styles.button, { backgroundColor: info.primary[500] }]}
          onPress={scrollTo}
        >
          {currentIndex === slides.length - 1 ? (
            <Text style={styles.buttonText}>Get Started</Text>
          ) : (
            <View style={styles.nextButtonContent}>
              <Text style={styles.buttonText}>Next</Text>
              <Ionicons name="arrow-forward" size={20} color="#FFF" />
            </View>
          )}
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 10,
    paddingBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
  },
  skipButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  skipText: {
    fontSize: 16,
    color: '#666',
    fontWeight: '500',
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  imageContainer: {
    width: width * 0.7,
    height: width * 0.7,
    borderRadius: (width * 0.7) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
  },
  emoji: {
    fontSize: 120,
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    paddingHorizontal: 10,
  },
  bottomContainer: {
    paddingHorizontal: 24,
    paddingBottom: 40,
  },
  paginationContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 32,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  button: {
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  nextButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});

export default OnboardingScreen;