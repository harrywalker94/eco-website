# ECO Advanced - Company Website

A website for an online Eco company who sell renewable and sustanable energy products.

# UX

The main aim of my website was to provide the user with images, videos, content and User Interaction. I chose a green and grey theme to symoblise the Environment.

I wanted to make the website easy for the user to navigate, hence why I have created a user friendly responsive-design and included links to other pages on the site as well as buttons to navigate the page from top to bottom, without having to scroll.

# Technologies
1. HTML
2. CSS
3. Boostrap
4. jQuery
5. JavaScript
6. GoogleMaps API

# Features
1. Header - The header features a top icon and fixed navbar, with links to other pages on the site (collapsable into navbar icon on small devices). 
   The icon bar disappears once the user begins to scroll down the page using jQuery and the fixed navbar becomes slightly tranpsarent.
   On smaller devices, once the burger icon is clicked it transforms into a cross using jQuery and CSS and once clicked on again, transforms back into a burger icon.
2. Smooth Scroll - The site features a smooth scroll effect, giving the user a better UX when interacting with the webpage.
3. ScrollTop Button - On the index.html page, there is a button which allows the user to scroll to the top of the page with a click.
4. I also used jQuery to animate the dropdown navigation menu when hovered upon.
4. Bootstrap Carousel - On index.html a Bootstrap carousel is used to display images in a slider. - [https://getbootstrap.com/docs/4.0/components/carousel/](https://getbootstrap.com/docs/4.0/components/carousel/) 
5. Owl Carousel - A JS Plugin - Used to display various quotes from customers regarding their service from the company. - [https://owlcarousel2.github.io/OwlCarousel2/](https://owlcarousel2.github.io/OwlCarousel2/) 
6. AOS (Animate on Scroll) - A JS Plugin - Used to animate certain elements when appearing onto the page. - [https://github.com/michalsnik/aos](https://github.com/michalsnik/aos)
7. Magnific Popup - A JS Plugin - Used to create a lightbox image gallery of the product images/diagrams. [https://fontawesome.com/](https://fontawesome.com/)
8. FontAwesome - FontAwesome icons used throughout the website. - [https://dimsemenov.com/plugins/magnific-popup/](https://dimsemenov.com/plugins/magnific-popup/)

## Features left to implement
In the future, I would like to include a backend where the user can submit their email address and subscribe to a real news letter.

# Testing  
All the social and external links will open in a new tab using 'target="_blank"'.

The website was tested across multiple browsers (Chrome, Firefox, Safari) and on mobile devices (iPhone 5/SE, iPhone 6/7/8, iPhone 6/7/8 plus, iPhone X/XS, Galaxy S5, Pixel 2, Pixel 2 XL, iPad, iPad pro to ensure compatability and responsiveness. 

On smaller devices on the index page, the parallax scrolling effect, the images were far too large for the user to view, therefore I removed 'background-attachment: fixed' and replaced it with 'background-attachment: cover'.

I had to seperate each plugin into their own files and attach them seperately to the required page. This was because when all running in the same app.js file, the magnific-popup plugin would not work.

# Deployment
The website is hosted using GitHub pages, deployed from the master branch. The deployed site will update automatically upon new commits to the master branch. In order for the site to deploy correctly on GitHub pages, the landing page must be named index.html.

You can run this deployed site at: https://harrywalker94.github.io/plumbing-website/

To run  this site locally, you can clone this repository directly into the editor of your choice by pasting __git clone https://harrywalker94.github.io/plumbing-website/ into your terminal. To cut ties with this GitHub repository, type __git remote rm origin__ into the terminal.

#  Credits

## Content
Content for the images were found from various websites.

www.pexels.com/
www.unsplash.com/
www.pixabay.com/
