**accounts-ponies** is a Meteorite package to populate your Meteor.users() collection with Ponies.


------------------------
### Installation

First, install the accounts-ponies package from the command line, like so:

````
mrt add accounts-ponies
````

Alternatively, if you'd like to bypass Atmosphere, and install directly from GitHub, you could update your application's smart.json file, like so:

````js
{
  "meteor": {
    "branch": "master"
  },
  "packages": {
    "accounts-ponies": {
      "git": "https://github.com/awatson1978/accounts-ponies.git"
    }
  }
}

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

52 Ponies

------------------------
### License

Images are copyright Hasbro Studios.  Don't use in production without permission.  This package is for private, non-commercial use only.
