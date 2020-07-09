import axios from 'axios';
const card = document.querySelector('.cards');
const myUserData = 'https://api.github.com/users/ashley-bergsma';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

// axios.get('https://api.github.com/users/ashley-bergsma').then(response => {
//     console.log(response);
// }).catch(error => {
//     console.log('there has been an error' + error);
// })

axios.get(myUserData).then(response => {
  card.appendChild(cardMaker(response))
}).catch(error => {
  console.log('gotta catch \'em all!' + error)
});
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

function cardMaker(user){
const card = document.createElement('div'); 
const userImg = document.createElement('img'); 
const cardInfo = document.createElement('div'); 
const userName = document.createElement('h3'); 
const userHandle = document.createElement('p')
const userLocale = document.createElement('p'); 
const userProfile = document.createElement('p');
// make sure to append the link below to the profile
const profileLink = document.createElement('a'); 
// make sure you APPEND THIS ISH 
const userFollowers = document.createElement('p'); 
const userFollows = document.createElement('p'); 
const userBio = document.createElement('p')

// now we can add class names to the appropriate elements 
card.classList.add('card'); 
cardInfo.classList.add('card-info'); 
userName.classList.add('name'); 
userHandle.classList.add('username');
// with the above done, we have to append the elements we've made to the parents 
// append img to card
card.appendChild(userImg); 
// append card-info div to card div 
card.appendChild(cardInfo); 
// append all the items to the card info 
cardInfo.appendChild(userName); 
cardInfo.appendChild(userHandle);
cardInfo.appendChild(userLocale);
cardInfo.appendChild(userProfile);
cardInfo.appendChild(profileLink);
cardInfo.appendChild(userFollowers);
cardInfo.appendChild(userFollows);
cardInfo.appendChild(userBio);
// testing, testing, is this thing on?
console.log(card)
// adding content to the elements 
userImg.src = 'user.data.avatar_url'; 
userName.textContent = 'user.data.name'; 
userHandle.textContent = 'user.data.login'; 
userLocale.textContent = 'user.data.location'; 
userProfile.textContent = 'Profile: ' // this is hardcoded to house the link
profileLink.textContent = 'user.data.html_url'; 
userFollowers.textContent = 'Followers: ${user.data.followers}'; 
userFollows.textContent = 'Following: ${user.data.following}'; 
userBio.textContent = 'Bio: ${user.data.bio}';
// THOU MUST RETURN 
return card
}

cardMaker(myUserData);
/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
