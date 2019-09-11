# Marvel Characters Application

A cross platform application that is capable of running on the web and mobile devices. It is built using the [ionic](https://ionicframework.com/) framework and 
supports compatibility with Android as well as iOS devices. It uses marvel [api](https://developer.marvel.com/) to make http requests and render marvel superheroes data
on the screen.

The application consists of the following pages:

* Welcome page to start application. 
* Character list page consisting of 20 heroes per page with a search bar to search heroes within the current page and previous-next buttons to toggle 
  between pages.
* Character detail page showing the details of the hero such as description, image.
* Comics list page which displays the scrollable list of comics for the corresponding hero on which the user clicks.
* Comics detail page which shows the details of the comic on which the user clicks such as image, description, price, creators and featured superheroes.
* Each page comes with a back button to move back by one page.

### Shown below is a giphy of a working application in local development setup

![giphy](/src/assets/mca.gif)


### Local setup for development purposes

The following must be installed to run the app locally

* [Node.js](https://nodejs.org/en/)
* [npm](https://www.npmjs.com)
* [Ionic and Cordova](https://ionicframework.com/docs/angular/your-first-app)

Next, clone the repository and perform the following commands at the root of the directory

* npm install, followed by 
* ionic serve

The app will start serving on localhost port 8100 and automatically redirects to the following url in the browser (localhost:8100/home) 

Note that the app was developed using 

* Node.js v12.7.0 
* npm 6.10.0
* ionic 5.2.6
* Angular v8 
