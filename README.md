<h1 align="center">
  Project: Mockingbird
</h1>

Project: Mockingbird is a music player developed in react with the following goals:

- Allow users as much control as possible over their music player - <span style="color:yellow; font-weight: bold;">In Progress</span>
- Give users a free universal platform to play music, be it desktop or mobile - <span style="color:red; font-weight: bold;">Not Done</span>
  - To that end, user created playlists can be saved and used between platforms in a variety of ways - <span style="color:red; font-weight: bold;">Not Done</span>
- Connection with Rich Presence on other platforms, so you can show the world what you're listening to, without paying for it - <span style="color:red; font-weight: bold;">Not Done</span>
- Edit the metadata of your songs, so you can have an organized library - <span style="color:red; font-weight: bold;">Not Done</span>

## Features

- Rich Presence support - <span style="color:red; font-weight: bold;">Not Done</span>
- Desktop and Mobile support - <span style="color:red; font-weight: bold;">Not Done</span>
- Playlists stored on the cloud - <span style="color:red; font-weight: bold;">Not Done</span>
- Lyrics display on every platform - <span style="color:red; font-weight: bold;">Not Done</span>
- Metadata information edit - <span style="color:red; font-weight: bold;">Not Done</span>
- Custom theme support - <span style="color:red; font-weight: bold;">Not Done</span>

## Build from source

Setup the latest supported version of Node.js by following the intructions on their [website](https://nodejs.org/en).

This project uses yarn, so setup yarn [here](https://yarnpkg.com/getting-started).

For mobile, this project uses local app development, so you'll need to setup Android Studio. Follow the instructions laid out by Expo [here](https://docs.expo.dev/get-started/set-up-your-environment/?platform=android&device=physical&mode=development-build&buildEnv=local#set-up-an-android-device-with-a-development-build).

Clone this repository and install dependencies running this command:

```bash
yarn
```

To run the project on mobile, run the following command:

```bash
yarn android #For android
```

## Project layout

    ├─ app/                      Router configuration using [Expo Router](https://docs.expo.dev/router/introduction/)
    ├─ src/                      Application source code
    │ ├─ components/             Components used throughout the whole project
    │ ├─ hooks/                  Actions done on screens that must be used on multiple locations
    │ ├─ screens/                Screen layout
    │ └─ services/               API communication
    └─ types/                    Types used throughout the whole project
