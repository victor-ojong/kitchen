<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>




<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://documenter.getpostman.com/view/33326436/2sA3duFYT8">
    <img style="border-radius: 15px;" src="/static/banne.jpg" alt="Logo" width="60%">
  </a>

  <h3 align="center">KITCHEN SERVICE </h3>

  <p align="center">
    A comprehensive documentation for Kitchen Service 
    <br />
    <a href="https://documenter.getpostman.com/view/33326436/2sA3duFYT8"><strong>Explore the postman docs »</strong></a>
    <br />
    <br />
    <a href="https://documenter.getpostman.com/view/33326436/2sA3duFYT8">View Demo</a>
    ·
    <a href="https://github.com/victor-ojong/kitchen/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
    ·
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#tech-stack">Tech Stack</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#roadmap">Workflow</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This is a RESTful API for a restaurant management product called
Kitchen, the API will have two (2) main consumers:
a. Customer,
b. Vendor
This product will only ever be accessed by these 2 consumers.

Features for Vendor:
* A vendor can create an account
* A vendor can list their menu items
* A vendor can create/update/delete their menu items


Features for Customers:
* A consumer can create an account
* A consumer can list vendors
* A consumer can view a vendor’s information
* A consumer can list menu items for a vendor
* A consumer can view the details of a menu item


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Tech Stack 

These tools are preferred because they offer


* <b>Node.js (LTS version)</b>: A robust, scalable runtime environment for building server-side applications using JavaScript.
     <br>
* <b>Typescript</b>: Provides static typing, enhancing code maintainability, readability, and catching errors during development.
  <br>
* <b>MySQL database</b>: A widely-used, open-source relational database management system, offering reliability, scalability, and performance for storing and managing data.
   <br>
* <b>KnexJS ORM</b>: An SQL query builder for Node.js, facilitating database interactions, migrations, and seeding with ease, promoting productivity and maintainability.
  <br>
* <b>Restful API Design</b>: A standard approach for designing APIs, ensuring interoperability, scalability, and simplicity in communication between systems.
   <br>
* <b>NestJs</b>: A progressive Node.js framework for building efficient, reliable, and scalable server-side applications, offering modularity, dependency injection, and robustness.
   <br>
* <b>Deployment - Render</b>: A cloud platform for deploying and scaling web applications easily, offering simplicity, scalability, and reliability in hosting infrastructure.
   <br>
* <b>CI/CD workflow</b>: Continuous Integration (CI) and Continuous Deployment (CD) automate the software delivery process, ensuring rapid, reliable, and consistent deployment of applications.
   <br>
* <b>Unit test - Jest</b>: A JavaScript testing framework with a focus on simplicity, ensuring code quality, reliability, and maintainability through automated testing.
   <br>
* <b>Authentication</b> - bcrypt: A widely-used library for hashing passwords securely, enhancing security and protecting user credentials from unauthorized access.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

In other to get started, the foolowing steps will be useful.

### Prerequisites

You will need a MySQL database. To install other dependepcies run the following command on the applications root directory.
* npm
  ```sh
  npm install
  ```

### Installation

Below is a guide to for installing and running this project locally and in production_


1. Clone the repo
   ```sh
   git clone https://github.com/victor-ojong/kitchen.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. RUN server in development environment
   ```sh
   npm run start:dev
   ```
3. RUN server in production environment
   ```sh
   npm run start:prod
   ```
4. ENSURE TO CREATE MYSQL DATABASE CONNECTION FOR THIS APPLICATION AND ATTACH INTO YOUR CONFIGURATION FILE`
 

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<div align="center">
<a href="https://documenter.getpostman.com/view/33326436/2sA3duFYT8/">
    <img src="/assets/codebase.png" alt="Logo" width="80%">
  </a>
</div>


<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- CONTACT -->
## Contact

Online - [@linkedIn](https://www.linkedin.com/in/victorojong) - LinkedIn

Project Link: [https://documenter.getpostman.com/view/33326436/2sA3duFYT8](https://documenter.getpostman.com/view/33326436/2sA3duFYT8/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
