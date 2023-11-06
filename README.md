# LionFit




<!-- Repository Information & Links-->
<br />

![GitHub repo size](https://img.shields.io/github/repo-size/YourName/NameOfRepo)
![GitHub watchers](https://img.shields.io/github/watchers/YourName/NameOfRepo)
![GitHub language count](https://img.shields.io/github/languages/count/YourName/NameOfRepo)
![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/YourName/NameOfRepo)


<!-- HEADER SECTION -->
<h5 align="center" style="padding:0;margin:0;">CS Strijdom</h5>
<h5 align="center" style="padding:0;margin:0;">21100249</h5>
<h6 align="center">DV200 - Term 3 | 2023</h6>
</br>
<p align="center">

  <a href="https://github.com/CSWilder02/lionfit---2023---Term-3.git">
    <img src="lionfit\src\Components\logo.png" alt="Logo" width="150" height="150">
  </a>
  
  <h3 align="center">LIONFIT</h3>

  <p align="center">

 Lionfit is more than just a website; it's a passion project meticulously developed to address the unique needs of gym enthusiasts and fitness aficionados. Crafted with unwavering commitment, Lionfit.com stands as a testament to the profound dedication to health and wellness.
   <br>
    <i>more about website</i> 
    
   <br />
   <br />
    ·
    <a href="https://github.com/CSWilder02/lionfit---2023---Term-3.git">Report Bug</a>
    ·
    <a href="https://github.com/CSWilder02/lionfit---2023---Term-3.git">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Project Description](#project-description)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [How to install](#how-to-install)
* [Features and Functionality](#features-and-functionality)
* [Concept Process](#concept-process)
   * [Ideation](#ideation)
   * [Wireframes](#wireframes)
   * [Custom UI](#user-flow)
* [Development Process](#development-process)
   * [Implementation Process](#implementation-process)
        * [Highlights](#highlights)
        * [Challenges](#challenges)
   * [Future Implementation](#peer-reviews)
* [Final Outcome](#final-outcome)
    * [Mockups](#mockups)
    * [Video Demonstration](#video-demonstration)
* [Conclusion](#conclusion)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->
## About the Project
<!-- header image of project -->
![image1](pokemonproject/src/Images/Ideation/intro.png)

### Project Description

Lionfit is the embodiment of a vision to facilitate and elevate the fitness journeys of individuals worldwide. Developed with passion, expertise, and a commitment to excellence, our website is your trusted companion on the path to a healthier, fitter, and more empowered you. Welcome to Lionfit.com, where fitness meets its true potential. 

### Built With

* [React](https://reactjs.org/)
* [Cards]
* [Mongodb]
* [Insomnia]
* [JavaScript]
* [Bootstrap]

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->
## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [NPM](https://www.npmjs.com/) installed on your machine. The [GitHub Desktop](https://desktop.github.com/) program will also be required.

### How to install

### Installation
Here are a couple of ways to clone this repo:

1. GitHub Desktop </br>
Enter `"https://github.com/CSWilder02/lionfit---2023---Term-3.git"` into the URL field and press the `Clone` button.

2. Clone Repository </br>
Run the following in the command-line to clone the project:
   ```sh
   "https://github.com/CSWilder02/lionfit---2023---Term-3.git"
   ```
    Open `Software` and select `File | Open...` from the menu. Select cloned directory and press `Open` button

3. Install Dependencies </br>
Run the following in the command-line to install all the required dependencies in Server:
   ```sh
   cd lionfit
    ```
   ```sh
   cd ./Server
    ```

   ```sh
   npm install bcrypt cors dotenv express joi joi-password-complexity jsonwebtoken mongoose nodemon
    ```
    ```sh
   npm run dev
   ```
   ``` sh
   Run the following in the command-line to install all the required dependencies in User Side:
   ```
   ```sh
   npm i
   ```
   ```sh
   cd lionfit
    ```
   ```sh
   npm start
    ```


5. An API key is not required


<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->
## Features and Functionality

<!-- note how you can use your gitHub link. Just make a path to your assets folder -->

### CRUD 
The CRUD functionality allows the admin to add products to their mongo database by using CRUD - Create, 
Read, Update & Delete

CREATE:
 <img src="lionfit\src\Pages\Images\CRUDCreate.jpg">

READ: 
<img src="lionfit\src\Pages\Images\CRUDRead.jpg">

UPDATE:
<img src="lionfit\src\Pages\Images\CRUDUpdate.jpg">

DELETE:
<img src="lionfit\src\Pages\Images\CRUDDelete.jpg">

### ADMIN
The Admin page is where the admin users can add their product aswell as see the orders of the clients that has purchased their products and also remove products that they has send out, to keep track of all their products sold

<img src="lionfit\src\Pages\Images\AdminOrders.jpg">



<!-- CONCEPT PROCESS -->
<!-- Briefly explain your concept ideation process -->
<!-- here you will add things like wireframing, data structure planning, anything that shows your process. You need to include images-->
## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation
Through looking at other gym aquipment I have seen that I wanted to make something different. I wanted to go with a 3D card style and dark gym theme.


### Custom UI

Using bootstarp aswell as react coding, I created a dark custom UI design that will suit the idea behind a dark gym theme, which allows users to look at the products of the website.

<img src="lionfit\src\Pages\Images\Login.jpg"  width="400px">
<img src="Mockups\screencapture-localhost-3000-product-2023-11-06-22_52_49.png" width="400px">
<img src="Mockups\screencapture-localhost-3000-information-2023-11-06-22_53_04 (1) 1.png" width="400px">
<img src="Mockups\screencapture-localhost-3000-singleproduct-64f1a9dc0e170da635bece7a-2023-11-06-22_56_10.png" width="400px">


<!-- DEVELOPMENT PROCESS -->
## Development Process

The `Development Process` is ....

1. Setup:

We began by setting up our development environment, installing Node.js, npm, and MongoDB.
A project directory was created, and we initialized a new React application using Create React App.

2. Frontend Development (React and Bootstrap):

The website's user interface (UI) was designed using Bootstrap for a responsive and visually appealing layout.
React components were built for various parts of the website, including product listings, user registration, and product management.
Bootstrap components were used for styling, ensuring a consistent and professional look.
React Router was implemented for seamless navigation between pages.
User registration and login forms were developed for a user-friendly experience.
State management was handled using MongoDB.

3. Backend Development (Node.js/Express.js):

We established a Node.js server with Express.js to serve as the backend for LionFit.
MongoDB was chosen as the database for storing product information and user data.
API endpoints were created to manage user registration, login, and CRUD operations for products.
Mongoose or a MongoDB driver was used to interact with the database.

4. User Authentication (JWT):

The website implemented user authentication using JWT for secure user login and session management.
JWT tokens were generated upon successful registration or login and sent to the client.
Middleware was used to protect routes requiring authentication, ensuring user data security.

5. CRUD Functionality:

API routes and controllers were designed for CRUD operations on products (adding, viewing, editing, deleting).
Robust validation and error handling were implemented to enhance user experience and data accuracy.

6. Testing:

Comprehensive testing was conducted for both frontend and backend components, utilizing Jest, React Testing Library, and Mocha/Chai for backend testing.
Various use cases, including authentication and product management, were thoroughly tested.

7. Deployment:

The website was deployed to a chosen hosting platform (e.g., Heroku, AWS, Netlify) to make it accessible to users.
Sensitive information like database connection strings and JWT secrets were secured using environment variables.
CORS configuration ensured smooth communication between frontend and backend on different domains.

### Implementation Process
<!-- stipulate all of the functionality you included in the project -->
<!-- This is your time to shine, explain the technical nuances of your project, how did you achieve the final outcome!-->

* Utilized React `Charts.JS` dependency for Data visualization
* Implemented Routing with `React-Router v6`.



#### Highlights
<!-- stipulated the highlight you experienced with the project -->
* Being able to create a visually appealing design
* Getting a 3D card working with a full rotation
* Learning more about how a server side connect to the visuals and not that visuals are everything, but knowing and seeing that if a visaully appealing design works that you have made a successful webpage.

#### Challenges
<!-- stipulated the challenges you faced with the project and why you think you faced it or how you think you'll solve it (if not solved) -->
* Getting the front end not to crash with the backend server when changing the visuals
* Allowing that a product is saved and transfferend to other pages of the webpage.



### Future Implementation
<!-- stipulate functionality and improvements that can be implemented in the future. -->

* In future I would like to focus more on implementing a bit more of ui design that is more flowing and also focusing on fixing my backend mistakes.



<!-- VIDEO DEMONSTRATION -->
### Video Demonstration

[View Demonstration](https://youtu.be/hkWA_4T4fTg)

To see a run through of the application, click below:





<!-- AUTHORS -->
## Authors

* **CS Strijdom** - [[CS Strijdom](https://github.com/YourName)](https://github.com/CSWilder02/Final-Lionfit.git)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->
## Contact

* **YourName** - [21100249@virtualwindow.co.za](mailto:21100249@virtualwindow.co.za) 
* **Project Link** - (https://github.com/CSWilder02/Final-Lionfit.git)


