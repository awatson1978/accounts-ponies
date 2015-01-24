**accounts-ponies** is a Meteorite package to populate your Meteor.users() collection with Ponies.


------------------------
### Installation

First, install the accounts-ponies package from the command line, like so:

````
meteor add awatson1978:accounts-ponies
````



------------------------
### Default User Record Schema  

The user objects are have a fairly simple document schema that looks like the following:
````js
{
  username: 'applebloom',
  password: 'applebloom',
  email: 'applebloom@test.org',
  profile: {
    name: 'Applebloom',
    role: 'Pony',
    avatar: '/avatars/applebloom.jpg'
  }
}
````

------------------------
### Default Usernames and Passwords  

Usernames and passwords for all the users should be the same.  For the most part, the username and password will both be the person's first name, but a number of users are set as the last name.  All emails will be at the ``test.org`` domain.


------------------------
### Users List

Applebloom
Applejack
Berry Punch
Big Mac
BonBon
Braeburn
Carrot Top
Cheerilee
Crackle
Daring Do
Derpy Hooves
Derpy Joker
Diamond Tiara
Dinky Doo
Discord
Dr. Whooves
Fancy Pants





------------------------
### Example Usage  

````html
{{#each userList}}
{{profile.name}}<br>
{{/each}}
````

````js
if (Meteor.isClient) {
  Meteor.subscribe("users");

  Template.registerHelper('userList', function(){
    return Meteor.users.find();
  });
}

if (Meteor.isServer) {
  Meteor.publish("users", function(){
    return Meteor.users.find();
  });
}
````


------------------------
### License

Images are copyright Hasbro Studios.  Don't use in production without permission.  This package is for private, non-commercial use only.
