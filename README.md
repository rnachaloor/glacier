# Glacier

<img src="glacier-logos.jpeg" width = "450" height = "450" >






Aakash Reddy, Rohit Nachaloor, and Aryan Shah

FBLA Mobile Application Development 2021

Johns Creek High School

## What is Glacier?
Glacier is an iOS and android mobile and android app that adresses the topic of professional social media. Glacier allows people of all ages to share ideas and best practices with one another in a easy-to-use professional environment. In Glacier, one can simply create a post and publicly display it to all of Glaciers users. The users can in turn like the post, and share the post to other people on any social media platform that is installed on your device. 

---


# Installation Instructions

## System Requirements

| Compatible Operating Systems      |
| ----------------------------------|
| iOS 9 or higher                   |
| Android 7.1 (Nougat) or higher    |


## Installation Guide for Android Device
1. Download the .apk file in the releases folder to your computer
2. Connect your android phone to your computer
3. Copy the .apk file from your computer to the phone
4. Disconnect the phone from the computer
6. Enable App Installation from Unknown Sources in the phone's settings
6. Open the phone's file explorer
7. Tap the .apk file on your phone
8. The app should be installed

## Installation Guide for iOS Emulator
| Prequisites                                  |
| ---------------------------------------------|
| A Mac                                        |
| node.js                                      |
| CocoaPods                                    |
| Xcode                                        |
| yarn (can get through npm install -g yarn)   |

To install on an iOS emulator, open the root folder (glacier) in terminal. Run the command- "yarn" to install any node.js related dependcies. Then, run "cd ios && pod install && cd .." or "npm run pod-install" to install any iOS related dependencies. Finally, run "npm run ios" or "react-native run-ios" to run the app on an emulator. 

## Installation Guide for Android Emulator

| Prequisites                                  |
| ---------------------------------------------|
| node.js                                      |
| yarn (can get through npm install -g yarn)   |

To install on an android emulator, first, [download android studio](https://developer.android.com/studio). Once you have done this, open the android studio application and click on the configure dropdown. Click on AVD manager. If not already selected, please select the target that has android 7.1 (nougat) or higher. You may click the green arrow to preview the emulator. To make the program output the contents of the app onto the emulator, create a file called local.properties under the android folder in the file structure. In this file, type sdk.dir= *the location of your sdk*. To find the location of your SDK, navigate back to the configure dropdown and select SDK manager. Copy the SDK location and paste it into the local.properties file, but add an extra "\\" for every "\\" that you see if you are on windows. Once you have done this, open the root directory of the app (glacier) in the terminal or command prompt. Run the command- "yarn". Finally, type in the command, "npm run android" or "react-native run-android" to run the app on an android emulator.


---

# Instructions on how to use the app
When you first open the app, you will be prompted to enter your login credentials. If you are a new user, click "Sign up here!". This will redirect you to the app's sign-in page. There, you will be asked to create your account. Remember, your information will be displayed across Glacier's wide array of professionals. Once you submit, you will be re-directed back to the login page, where you once again will be asked to enter your login credentials. Once you do, you will be sent to Glacier's home screen, which displays the posts of real people on the app. To create a post, navigate to the new post section, designated by a plus sign on the navigation bar. Here, you can create the post title and add the post content. When you click post, you can return to the home page and refresh the posts by pulling down and releasing the home page. Your post should appear momentarily. To like a post, you can click the heart sign located on the bottom left part of the post. You can also share the post to any social media platform by clicking the share button on the bottom right. You can share the post to any app that is present on your device. Once done, you can also navigate to the settings page, denoted by a gear on the navigation bar. Once there, you can access a wide array of resources and services such as our terms and Conditions, FAQ, and our Terms and Conditions. To sign out, you can click the sign out button on the very bottom, which will re-direct you back to the login page.

# Frequently Asked Questions

## How to create an account?
When you first launch Glacier, you will be directed with the app's login screen. If you are creating an account for the first time, click "Sign Up Here!". This will re-direct you to the sign up page, which may ask for your First and Last name, the Username that you want to be public, and a desired Password along with its confirmation. 

## How to create a post?
To create a post, direct your attention to the navigation bar at the bottom of your screen. To create a post, click on the icon with a +. Here, you will automatically be set up with the post editor where you can add a title and comment what you want in the post content as long as it abides by our Terms of Service located in settings. After you have done that, you can click the Post button. To see your post, pull down on the home page to refresh the posts, and you should see your post.

## How to share a post on glacier to another social media platform?
To share a post on Glacier to another social media platform, click on the share button on the post, which is denoted by the paper airplane on the bottom-right hand side of the post. Once you do so, you can share the post to any social media platform that is installed on your device. You can also copy the text on the post by clicking copy or copy to clpboard on android and iOS repsectively. 

## How to report a bug?
To report a bug, navigate to the settings page on the navigation bar, denoted by the gear. Once there, you can click on Report a Problem, which will ask specifics on the error. Your feedback is valuable to us, and it allows us to make Glacier reliable and user friendly

## How to sign out?
To sign out, navigate to the settings page denoted by the gear. Click the Sign Out bar. This will re-direct you back to the login screen

## How to view the source code?
To find the source code, navigate to where you saved the folder titled "glacier". Once there, you can navigate to the screens folder to view the general screens that apeear on both android and iOS. Please note that there are platform specific segments of code that wont translate to the other operating system. 

---


# Version
Version 1.0

2/14/2020

---

# Terms and Conditions
Glacier was programmed and is owned by Rohit Nachaloor, Aakash Reddy, and Aryan Shah. Glacier was distributed under the GPL version 3 license, which is an open-source license that allows anyone to download and run, modify, freely redistribute, and distribute modified versions of the app as long as the modified works are also distributed under the same GPL license. The creators of this app are not responsible for any harassment that occurs on this app, although measures will be taken against offending users if harassment is reported. The creators of the app are also not responsible for any inappropriate use of this app. If you are concerned with a user's comments or remarks on the app, please mention this in our Report a Problem page under settings. Thank you!

---

# License
[GPL3.0](https://choosealicense.com/licenses/gpl-3.0/)


