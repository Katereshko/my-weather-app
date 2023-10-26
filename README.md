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
- API provided by the websites https://abstractapi.com (for IP) and https://api.openweathermap.org (for weather data);
- The Fetch API which provides a JavaScript interface for accessing and manipulating parts of the protocol, such as requests and responses. It also provides a global fetch() method that provides an easy, logical way to fetch resources asynchronously across the network. The fetch() method is used in this app to request data from a server of the website that provides weather data. This method requires a parameter, the URL to request, and returns a promise.

### User side:  
- open the app and make sure your Internet connection is good as it is needed for the app to work correctly  
- the app will define your current city using your IP and show the weather in your city  
- in case the city is not defined or in case you need to find the weather in another city, type its name in the search box and press the Enter key

### Logic side  

In order to make the use of URL and API keys more convenient, they are initially defined.
So, the **myKey** const contains the API key for the abstractapi.com website, and the **api** object contains such properties as **endpoint** (URL for the openweathermap.org website's API) and **key** (the individual user's key for this API).

After the page is loaded, the **getIP()** async function is called and helps to receive the info about the user's city using API provided by the website https://abstractapi.com.  
This function works two-stage: first it uses _fetch()_ method which returns a Response object and places it into the **res** const (the URL of the API-providing server is used as a parameter and it also contains the **myKey** const as a part of URL, the key is personal for a certain user and is received by user once the user is signed up).     
Once the body is fully loaded, the **res** gets converted to json using the _.json()_ method and gets placed into the **result** const. After that the **getInfo()** function is called with the parameter "result.city" which means the value of _city_ key of the object inside the **result**.  



const api = {
    endpoint: "https://api.openweathermap.org/data/2.5/",
    key: "e4bf831c5d1b7898383c04a744ab0119"
}

const input = document.querySelector("#input");
input.addEventListener("keypress", enter);

The constants represent the following items (an example for game 1):   
***input1*** - an input field where the user should enter the suggested number for the first game,   
***buttonGame1*** - the button that the user should click in order to start the game or enter the next suggested number,  
***answer1*** - a random number from 1 to 20 generated using Math.random  

***input2, buttonGame2, answer2*** - similar constants for the second game accordingly, given that the numbers range in the second game is from 1 to 100.  
The constants described above are defined when the page is loaded, so the random numbers for both games (constants answer1 and answer2) are defined before any game starts.  

When the user clicks the _buttonGame1_, the _playGame()_ function is called. The function receives the value of the constant _input1_ (the number currently entered by the user in the input field) and puts it into the constant _userNumber1_. Before checking if the number is guessed, the functions also checks if the number meets the range requirement (is not a NaN and also is not less than 1 and not higher than 20 for the first game or 100 for the second game). In case the requirement is not met, an alert appears and asks the user to enter another number.   
After a suitable suggested number is received, the function is comparing the user's number to the _answer1_ constant. In case the value of _userNumber1_ is lower than the answer1 const, the alert 'My number is higher!' is shown. In case the value of _userNumber1_ is higher than the answer1 const, the alert 'My number is lower!' is shown. After each try the user enters another number and clicks the _buttonGame1_ or Enter key, which calls the _playGame()_ function again. In case there is a match, the user wins and the game is over. The page needs to be reloaded in order to get new random numbers and play again.

**Thanks for your time exploring my project!**

**EKATERINA TERESHKO
ekaterina.tereshko.me@gmail.com**
