# AROGYAM {Solving For India Hackathon}

#### Arogyam is an Online Health Care Consultation Web App where a user can post there query regarding there health issue as medium of post which inlcude discription, image. Every Doctor who has been registered would be able to see the post of the different user and can offer consultation to the user by providing Consultation fee, start time and end time as input field.

Once the doctors have submitted there bid or consultation on user post, user has the independence to choose between various consultations of different doctor which he/she thinks is economically, or is best suited. User has to pay the consultation fee for the Consultation of the respected doctor. After the Payment is done Doctor will send user an Email for the same.

Moreover,User and Doctor will both be able to Update the Profile Picture and their respected data.

# Following are the Screenshot of the Arogyam Frontend with its functionality -

#### Sign Up Page for Patient and Doctor (mark Tick for Registering as a Doctor)

![register](https://user-images.githubusercontent.com/90765836/233012570-7486f3d0-c8de-4f9e-9061-00de260279cc.png)

#### Login Page for Patient and Doctor

![login](https://user-images.githubusercontent.com/90765836/233012689-cae4785d-13f2-4b01-928e-83c586bea089.png)

#### Patient Home Screen

![patient hOme screen](https://user-images.githubusercontent.com/90765836/233012782-44ac49cf-7570-433f-bd12-4d5cf1ca9fa7.png)

#### Patient Posting A Medical Condition to registered Doctors

![user posting query](https://user-images.githubusercontent.com/90765836/233012896-aa673dc6-61f2-4634-962b-337a13081127.png)

#### Patient Post on Real Time

![user post on Real time](https://user-images.githubusercontent.com/90765836/233012917-c14cdba0-3e44-4499-b779-0bb1a463a566.png)

#### Patient Profile Section

![user profile section](https://user-images.githubusercontent.com/90765836/233013085-2c0c3172-a9f8-4d72-a6e5-fa170e8cdb2e.png)

#### Patient Updated Profile Section

![user updated profile](https://user-images.githubusercontent.com/90765836/233013162-9117f2c0-01ff-4e06-9166-2fe78cbcc915.png)

#### Doctor Home Screen

Doctor Can See Various Post of the User i.e Patient on there Feed.
![doctor profile feed](https://user-images.githubusercontent.com/90765836/233013273-8e043b39-ad57-4c58-a92c-cf47b52871e4.png)

#### Doctor Offering Consultation to User i.e. Patient

![doctro offering cusltation](https://user-images.githubusercontent.com/90765836/233013856-0ace514a-c1fb-4817-ae13-de1269bdd04f.png)

#### Doctor Profile Feed (Basic Info and More Info)

#### Basic Information -

![doc updating basic profile](https://user-images.githubusercontent.com/90765836/233014087-5eaba80f-972a-4412-be9b-793bd5f56c2f.png)

#### More Information -

![doct updating more info](https://user-images.githubusercontent.com/90765836/233014197-3b8ea45a-50ed-49fc-a2d5-69a45946ac89.png)

#### Patient Can see Doctor Consultaion on his/her Post -

![doc consult on paitent feed](https://user-images.githubusercontent.com/90765836/233014362-7906abc4-2727-4ec2-b29c-cd3d191f445c.png)

#### User i.e. Patient Accepting Doctor Consultation via Checkout portal created using Stripejs

![user accepting consultaion of doc using stripe](https://user-images.githubusercontent.com/90765836/233014545-d18cae94-4c64-4549-a067-53e8754abf0f.png)

#### Doctor Consult Page -

Doctor can the his/her consulation on various patient post. He got the choice to Revoke the Consultaion from Patient Post if he has not yet Paid for the same using "Revoke Consultaion" Button. If the User i.e. Patient has Accepted the Payment the Doctor Can see the "Paid" on Patient Post as a remark to Send Email For Consultation.

![doc consult page](https://user-images.githubusercontent.com/90765836/233014594-13c24151-5317-454a-8a8f-ec657a1c4314.png)

Doctor Sending Mail to Patient Email Address -
![doct sending mail to patient](https://user-images.githubusercontent.com/90765836/233015443-5d504bf6-e0f7-4913-a068-70c0bbc2666a.png)

Patient Recieving Email From Doctor Email Address -
![patient recieving email](https://user-images.githubusercontent.com/90765836/233015584-9ccadc3f-55a6-45fc-a902-c6cabdd49f4d.png)

## Demo

##### GCP DEPLOYMENT - http://34.126.214.69:3002/

##### VERCEL DEPLOYMENT - https://arogyam.vercel.app/

## Installation Guide

### clone the project

```
 https://github.com/Ankur-Ydv/Arogyam.git
```

### go to the project directory

```
  cd Arogyam
```

### Install dependencies

```
  npm install
  npm install react react-dom next
```

### Define Eviromental Variable

#### create .env file

##### Write Following Key Value Pairs in .env File

```
STRIPE_PUBLISHABLE_KEY=pk_test_51MuH92SFjArEzew7RjYSQUVXY7vx3G5QQdYI3CXDOOSHryMkpqR2V1x7g1tAMsUEgi6JNIXDitrb6fGE6rpIZBk6000D8jEb3q
STRIPE_SECRET_KEY=sk_test_51MuH92SFjArEzew72g1zD6VwxRicg9eyTlUDlYL3wSUuH0TO7dm7Dns9uS0iKUAFISSqQ29bSQ7e4ZKGG3OnyA3T000eUcjdTj

MONGO_URL=<Your MONGO DB URL>

NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=<Random String>

SERVICE_KEY_ID=<Your Emailjs Service key>
TEMPLATE_KEY_ID=<Your Template key Id>
USER_KEY_ID=<Your User Key Id>
```

### start the app

```
  npm run dev
```

## Made By

[Ankur Yadav](https://github.com/Ankur-Ydv),
[Arinaymay Bhaskar](https://github.com/Arinaymaybhaskar),
[Anuj Boricha](https://github.com/AnujBoricha)
