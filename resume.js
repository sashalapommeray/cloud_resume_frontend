// expiration = new Date;
// expiration.setMonth(expiration.getMonth()+6)
// counter = eval(cookieVal("total_visited"))
// counter++
// document.cookie = "total_visited="+counter+";expires=" + expiration.toGMTString()
//  
//  
// function cookieVal(cookieName) {
//         thisCookie = document.cookie.split("; ")
//         for (i=0; i<thisCookie.length; i++){
//                 if (cookieName == thisCookie[i].split("=")[0]){
//                         return thisCookie[i].split("=")[1]
//                 }
//         }
//         return 0;
// }
//  
// document.getElementById('result').innerHTML = "<center><h3>You visited this page <label style='font-size:40px;' class='text-info'>"+counter+"</label> times.</h3></center>";



// Define the API URL
const apiUrl = 'https://javzxejl8e.execute-api.us-east-1.amazonaws.com/dev';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });