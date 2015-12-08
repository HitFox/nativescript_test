# NativeScript Test App
This is a simple [NativeScript][nativescript] test app. You can take a picture and show the taken picture afterwords in the view.

## Environments
It works on iOS and Android. If you run it in the emulator, you can use the hardware camera from your laptop on android. In iOS you can choose a picture from the build in photo library.

## Get it up and running
  1. Make sure you install [NativeScript][nativescript] according to there [docs][docs] and have android and iOS up and running.
  2. `tns platform add android`
  3. `tns platform add ios`
  4. `tns prepare android`
  5. `tns prepare ios`
  6. `tns run ios --emulator`
  7. `tns run android --emulator`

Unfortunately you need to run every command separately for every platform. Make your live easier and run in separate shells instances ;)

[nativescript]: nativescript.org
[docs]: http://docs.nativescript.org/getting-started#getting-up-and-running