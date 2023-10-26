# my-weather-app

My individual coding project.  
Currently hosted on Netlify:  
https://my-weather-app-104.netlify.app/

## File structure
script.js - the main logic file  
index.html - main html file - to use the app, open this file on browser window  
style.css - main styling file  
favicon.ico - icon to be displayed on browser tab  

## About the app
Created by Ekaterina Tereshko as an individual project during the coding program, it has the following features:

### Tools used:  
- API servers provided by the websites https://abstractapi.com (for IP) and https://api.openweathermap.org (for weather data);
- The Fetch API which provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method is used in this app to request data from a server of the website that provides weather data. This method requires a parameter, the URL to request, and returns a promise.

### User side:  
- open the app and make sure your Internet connection is good as it is needed for the app to work correctly  
- the app will define your current city using your IP and show the weather in your city  
- in case the city is not defined or in case you need to find the weather in another city, type its name in the search box and press the Enter key

### Logic side  

In order to make the use of URL and API keys more convenient, they are initially defined.
So, the **myKey** const contains the user's unique API key for the abstractapi.com website, and the **api** object contains such properties as **endpoint** (URL for the openweathermap.org website's API) and **key** (the individual user's key for this API which is received by user once the user is signed up).

After the page is loaded, the **getIP()** async function is called. It helps to receive the info about the user's city using API provided by the website https://abstractapi.com.  

This function works two-stage: first it uses _fetch()_ method which returns a Response object and places it into the **res** const (the URL of the API-providing server is used as a parameter and it also contains the **myKey** const as a part of URL).     
Once the body of the Response is fully loaded, the **res** gets converted to json using the _.json()_ method and gets placed into the **result** const. After that the **getInfo()** function is called with the parameter "result.city" which means the value of _city_ key of the object inside the **result**.  

As the user might enter the city name in the input field, there is also an event handler _addEventListener()_ set on the Enter key so that the value of the user's input is used as a parameter in the **getInfo()** function instead of the city defined by default based on the user's IP.

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);  

async function getInfo (city) {
    const res = await fetch(`${api.endpoint}weather?q=${city}&units=metric&appID=${api.key}`);
    const result = await res.json();
    displayResult(result);


**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
