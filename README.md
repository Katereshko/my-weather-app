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

In order to make the use of URL and API keys more convenient, they are initially defined in the constants.
So, the **myKey** const contains the user's unique API key for the abstractapi.com website, and the **api** object contains such properties as **endpoint** (URL for the openweathermap.org website's API) and **key** (the individual - for the app's author in this case - key for this API).

After the page is loaded, the **getIP()** async function is called. It helps to receive the info about the user's city using API provided by the website https://abstractapi.com.  

This function works two-stage: first it uses _fetch()_ method which returns a Response object and places it into the **res** const (the URL of the API-providing server is used as a parameter and it also contains the **myKey** const as a part of URL).     
Once the body of the Response is fully loaded, the **res** gets converted to json using the _.json()_ method and gets placed into the **result** const. After that the **getInfo()** function is called with the parameter _"result.city"_ which means the value of _city_ key of the object inside the **result**.  

As the user might enter any city name in the input field, there is also an event handler _addEventListener()_ set on the Enter key so that the value of the user's input is used as a parameter in the **getInfo()** function instead of the city defined by default based on the user's IP.

The **getInfo()** async function also works two-stage: first it uses _fetch()_ method which returns a Response object and places it into the **res** const (the URL of the API-providing server (**api.endpoint**), in combination with the user's key (**api.key**), is used as a parameter).     
Once the body of the Response is fully loaded, the **res** gets converted to json using the _.json()_ method and gets placed into the **result** const. This object contains all possible data about the current weather in the city. After that the **displayResult()** function with the parameter _"result"_ is called which is responsible for user-friendly display of the received weather data.  

In the **displayResult()** function variables are declared which now contain relevant page elements selected using _querySelector()_. In this app the following features are set, although the API provides much more data that can also be used (check the "Сustomization possibilities" section): _city_, _temperature_, _feels like_, _icon_, _conditions_, _min and max temperature_.  

For each element the value from **result** is displayed on the page using _textContent_ and _innerHTML_.  
Also, the **getOurDate()** function is called inside the **displayResult()** function.  
It defines the current user's full date and takes the current day name, date, month and year from it.  
Then it handles with the page element with the "#date" id, puts it into the **dateOnScreen** variable and makes the date to be displayed on the page in the relevant element using _textContent_.  

### Customization possibilities

In order to add more elements that can be displayed on the page, add them to HTML code in the **index.html** file and to the **displayResult()** function in the **script.js** file: add an HTML element and a variable for each data type you want to display (like humidity, presuure, etc.). Check the object that is placed into **result** const after the **getInfo()** async function is called so that you know what the appropriate property's key is.  

For example, to add humidity data to the page, you need to take the following steps:  
1. Add an element to the **index.html** file, make sure it has an id so that you can select it later:

<img width="385" alt="Снимок экрана 2023-10-27 в 11 46 05" src="https://github.com/Katereshko/my-weather-app/assets/70511658/c777a858-5727-48bf-af0a-9eb791a94b11">   

`<p id="humidity">87</p>`  

(add a number within the HTML tag as an example so that it is displayed to the user while the actual data is loading)  

2. Using console, check the **result** value received after the **getInfo()** function works:

`console.log(result)`  

<img width="483" alt="Снимок экрана 2023-10-27 в 11 54 33" src="https://github.com/Katereshko/my-weather-app/assets/70511658/cbd7d560-7fb0-42cd-aefe-987f9f9bc5c7">  

3. Find the humidity data in this object and copy its key name: the full name is "main.humidity"  

<img width="184" alt="Снимок экрана 2023-10-27 в 11 56 03" src="https://github.com/Katereshko/my-weather-app/assets/70511658/a2fba3f5-0b7f-47c4-bf75-fc3ca54484a5">  

4. Add the following code to the **script.js** file inside the **displayResult()** function:  

`let humidity = document.querySelector("#humidity");`     
``humidity.textContent = `${result.main.humidity}`; ``  

After these steps the humidity actual data will be displayed right in the place where it is placed within the HTML markdown. You can also add style to the existing or new data sections using their id (#) and adding new features to the **style.css** file.

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
