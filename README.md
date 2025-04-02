# Fome Ai Mobile Application | March 2024 - May 2024

A capstone project mobile app developed for Fome Ai, a real-industry company leveraging advanced computer vision technology and AI to enable users to perform movement tasks at home using their smartphones, with results analyzed for performance insights. Due to the limited time frame, some functions were implemented as prototypes, showcasing design and technical potential rather than complete functionality.

---

## Features

- **Cross-Platform Support:** Built with Expo and React Native, ensuring compatibility across Android and iOS.
- **Modern UI:** Implements a sleek, responsive user interface with a focus on visual design.
- **Prototype Functionality:** Many features are designed as visual prototypes to demonstrate the intended user experience.

---

## Project Disclaimer

**Important:** Given the limited development period (11 weeks), the primary focus was on UI/UX design and rapid prototyping. As a result, several features are implemented to "look like" complete functionality rather than being fully operational.

---

## Prototype Video

Below is a video of the app interface:

<video width="640" height="360" controls>
  <source src="./assets/VID_20250402152727486.MP4" type="video/mp4">
  Your browser does not support the video tag.
</video>

---

## Getting Started

### Prerequisites

- **Node.js** (v20.11.1 recommended)
- **npm** (v10.2.4 recommended) or **Yarn**
- **Expo CLI** (install globally via `npm install -g expo-cli`)

### Installation

1. **Clone the repository and navigate to the project folder:**
   ```bash
   git clone https://github.com/zoewang66/FomeAi-app.git
   cd FomeAi-app
   ```

2. **Install dependencies:**
   If you use npm:
   ```bash
   npm install
   ```
   Or if you prefer Yarn:
   ```bash
   yarn
   ```
3. **Start the project:**
   ```bash
   npm start
   ```
This command will start the Expo Metro Bundler. You will see a QR code in the terminal, which you can scan using the Expo Go app on your mobile device. Alternatively, press:
-**a** to open the Android emulator,
-**i** to open the iOS simulator,
-**w** to open the web version.


### Dependencies

The following key packages are used in this project:

- **expo** – Framework and platform for universal React applications  
- **expo-av** – Audio and video playback  
- **expo-camera** – Access to the device camera  
- **expo-image-manipulator** – Image processing utilities  
- **expo-image-picker** – Picking images and videos from the device's library  
- **expo-media-library** – Access and manage the media library on the device  
- **react-native** – Core library for building native apps using React  
- **react-native-safe-area-context** – Handling safe area insets

> **Warning:** Some packages report version mismatches for best compatibility with the installed Expo version. For instance:
> - `expo` (installed: 51.0.2, expected: ~51.0.39)
> - `expo-av` (installed: 14.0.4, expected: ~14.0.7)
> - `expo-camera` (installed: 15.0.6, expected: ~15.0.16)
> - `expo-image-manipulator` (installed: 12.0.3, expected: ~12.0.5)
> - `expo-image-picker` (installed: 15.0.5, expected: ~15.1.0)
> - `expo-media-library` (installed: 16.0.3, expected: ~16.0.5)
> - `react-native` (installed: 0.74.1, expected: 0.74.5)
> - `react-native-safe-area-context` (installed: 4.10.1, expected: 4.10.5)
>
> For best compatibility, consider updating these packages with:

```bash
npm install expo@~51.0.39 expo-av@~14.0.7 expo-camera@~15.0.16 expo-image-manipulator@~12.0.5 expo-image-picker@~15.1.0 expo-media-library@~16.0.5 react-native@0.74.5 react-native-safe-area-context@4.10.5
```

### Known Issues

- **Prototype Functionality:** Many features are designed as visual prototypes and do not offer complete functionality.
- **Deprecated Packages & Warnings:** Some dependencies may show warnings during installation due to deprecation. These warnings do not necessarily break the project but should be reviewed for future updates.
- **Vulnerabilities:** After installation, npm may report some vulnerabilities. You can run `npm audit fix` or `npm audit fix --force` to address these, but use caution as forcing fixes might introduce breaking changes.


### Running the Project

After installing dependencies, run:

```bash
npm start
```
Expo will start the Metro Bundler and display a QR code in the terminal. Use the Expo Go app to scan the QR code or press the appropriate key to open the simulator/emulator.

---
## Contributing
Contributions are welcome! Please fork this repository and submit a pull request with your proposed changes. Ensure your contributions adhere to the project’s style guidelines and pass all tests.


---
<p align="center">Thanks for checking out Fome Ai! 🚀</p>
