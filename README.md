# ListApp

ListApp is a simple cross-platform mobile application built with React Native. The app allows users to manage a list of items, including adding, editing, and deleting items. The items are persistently stored using AsyncStorage.

## Features

- Display a list of items
- Add new items with a name and description
- Edit existing items
- Delete items from the list
- Input validation with error messages
- Persistent storage of items

## Prerequisites

- Node.js and npm installed
- React Native CLI installed
- Android Studio for Android development or Xcode for iOS development

## Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/mts755Dev/ListApp.git
    cd ListApp
    ```

2. Install the project dependencies:

    ```sh
    npm install
    ```

3. Install the necessary dependencies for React Navigation and AsyncStorage:

    ```sh
    npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
    npm install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
    npm install @react-native-async-storage/async-storage
    ```


## Running the Application
1. Run the application:

    ```sh
    npm run start
    ```

### Android

1. Start the Android emulator or connect an Android device.
2. Run the application:

    ```sh
    npm run android
    ```

### iOS

1. Open `ios/ListApp.xcworkspace` in Xcode.
2. Select your target device or simulator.
3. Run the application:

    ```sh
    npm run ios
    ```

## Project Structure

- `App.js`: The main entry point of the application, setting up navigation and context.
- `context/ItemContext.js`: Context for managing item state, including adding, editing, and deleting items, as well as persistent storage.
- `screens/ListScreen.js`: Screen displaying the list of items with options to add, edit, or delete items.
- `screens/AddItemScreen.js`: Screen for adding new items with input validation.
- `screens/EditItemScreen.js`: Screen for editing existing items with input validation.
