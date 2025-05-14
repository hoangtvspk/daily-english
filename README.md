# Daily English

A React Native mobile application designed to help users learn English daily through an interactive and engaging interface.

## Features

- Daily English learning exercises
- Text-to-speech functionality for pronunciation practice
- Copy and share features for learning materials
- Modern and intuitive user interface
- Cross-platform support (iOS and Android)

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (Latest LTS version recommended)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac users) or Android Studio (for Android development)
- Xcode (for iOS development on Mac)

## Installation

1. Clone the repository:

```bash
git clone [your-repository-url]
cd daily-english
```

2. Install dependencies:

```bash
yarn install
# or
npm install
```

3. Install iOS dependencies (Mac only):

```bash
cd ios
pod install
cd ..
```

## Running the App

### Development

To start the development server:

```bash
yarn start
# or
npm start
```

### iOS

```bash
yarn ios
# or
npm run ios
```

### Android

```bash
yarn android
# or
npm run android
```

## Clean Build Instructions

If you encounter build issues or need to perform a clean build, follow these steps:

### Clean iOS Build

```bash
# Navigate to iOS directory
cd ios

# Remove pods
pod deintegrate
pod cache clean --all

# Clean build folders
rm -rf build
rm -rf Pods
rm -rf Podfile.lock

# Return to root directory
cd ..

# Reinstall pods
cd ios
pod install
cd ..
```

### Clean Android Build

```bash
# Navigate to Android directory
cd android

# Clean Gradle build
./gradlew clean

# Return to root directory
cd ..
```

### Clean JavaScript/TypeScript Build

```bash
# Remove node modules and cache
rm -rf node_modules
rm -rf .expo

# Reinstall dependencies
yarn install
# or
npm install
```

### Clear Metro Bundler Cache

```bash
# Start Metro with clean cache
npx react-native start --reset-cache
```

After cleaning, rebuild the project using the running instructions above.

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Expo Speech
- AsyncStorage
- React Native Vector Icons

## Project Structure

```
daily-english/
├── assets/          # Images, fonts, and other static assets
├── src/             # Source code
├── ios/             # iOS specific files
├── android/         # Android specific files
└── App.tsx          # Main application component
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Your Name - [your-email@example.com]

Project Link: [https://github.com/yourusername/daily-english](https://github.com/yourusername/daily-english)
