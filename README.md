#Boston Airbnb (Project 3)

***The Data and Maps pages are correctly displayed through a live server while the Comparisons only shows up when running the app.py in terminal and loading the page that way.***

The aim of our site is to enable users to easily navigate the top rated Airbnbs (90 and above) in the Boston area.

#Breakdown/Goals

Our site is composed of 4 main pages:

-Home Page
  The homepage provides users with a breakdown of what our site has to offer. It provides a link to each of our pages as well as a small breakdown of our goals.
  
-Comparisons
  The Comparisons page breaks down the Boston Airbnb listings by zipcode and displays a bar graph displaying the total listings in each zipcode. Additionally, the page provides a dropdown menu for the user to choose a zipcode. When they do, the page displays a scatter plot (price vs ratings) of the available listings in that zipcode. Ideally, the site would display a hover tab displaying the name, beds, bedrooms, price, rating and a clickable url for the listing. We had a bit of trouble diplaying all of that info.
  
-Map
  The Map page displays an interactive map of the Boston area with clickable geo markers that display an array of information. Ideally, we would like to have the map have more filtering options.
  
-Data
  The Data page displays all of the data we have for the Boston area, including data we didn't get a chance to use in our visualizations. We would have liked to play with more of it and display more in depth/interactive visuals but lack of time was a big factor.
  
#Complications

In addition to lack of time, we also had a very difficult time synchronizing our repo as well as the deployment of our page. Because the data for the Data and Map pages is pulled directly from the listings.csv and the data for the Comparisons page is pulled from a flask route, we had to display our pages seperately. The Data and Maps pages are correctly displayed through a live server while the Comparisons only shows up when running the app.py in terminal and loading the page that way.
