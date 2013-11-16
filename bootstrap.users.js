// if the database is empty on server start, create some sample data.
// we create a separate bootstrap.users.js file
// because we'll be wanting to set up a number of patient-scenario test users

Meteor.startup(function () {
  if (Meteor.users.find().count() === 0) {
    console.info('no users in database!  adding some default users');

    var userId = null;

    // crate our administrator
    userId = Accounts.createUser({
      username: 'applebloom',
      password: 'applebloom',
      email: 'applebloom@test.org',
      profile: {
        name: 'Applebloom',
        role: 'Pony',
        avatar: '/avatars/applebloom.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'applejack',
      password: 'applejack',
      email: 'applejack@test.org',
      profile: {
        name: 'Applejack',
        role: 'Pony',
        avatar: '/avatars/applejack.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'berry.punch',
      password: 'berry.punch',
      email: 'berry.punch@test.org',
      profile: {
        name: 'Berry Punch',
        role: 'Pony',
        avatar: '/avatars/berry.punch.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'big.mac',
      password: 'big.mac',
      email: 'big.mac@test.org',
      profile: {
        name: 'Big Mac',
        role: 'Pony',
        avatar: '/avatars/big.mac.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'bonbon',
      password: 'bonbon',
      email: 'bonbon@test.org',
      profile: {
        name: 'BonBon',
        role: 'Pony',
        avatar: '/avatars/bonbon.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'braeburn',
      password: 'braeburn',
      email: 'braeburn@test.org',
      profile: {
        name: 'Braeburn',
        role: 'Pony',
        avatar: '/avatars/braeburn.jpg'
      }
    });
    console.info('Account created: ' + userId);


    // crate our administrator
    userId = Accounts.createUser({
      username: 'carrot.top',
      password: 'carrot.top',
      email: 'carrot.top@test.org',
      profile: {
        name: 'Carrot Top',
        role: 'Pony',
        avatar: '/avatars/carrot.top.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'cheerilee',
      password: 'cheerilee',
      email: 'cheerilee@test.org',
      profile: {
        name: 'Cheerilee',
        role: 'Pony',
        avatar: '/avatars/cheerilee.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'crackle',
      password: 'crackle',
      email: 'crackle@test.org',
      profile: {
        name: 'Crackle',
        role: 'Pony',
        avatar: '/avatars/crackle.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'daring.do',
      password: 'daring.do',
      email: 'daring.do@test.org',
      profile: {
        name: 'Daring Do',
        role: 'Pony',
        avatar: '/avatars/daring.do.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'derpy.hooves',
      password: 'derpy.hooves',
      email: 'derpy.hooves@test.org',
      profile: {
        name: 'Derpy Hooves',
        role: 'Pony',
        avatar: '/avatars/derpy.hooves.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'derpy.joker',
      password: 'derpy.joker',
      email: 'derpy.joker@test.org',
      profile: {
        name: 'Derpy Joker',
        role: 'Pony',
        avatar: '/avatars/derpy.joker.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'diamond.tiara',
      password: 'diamond.tiara',
      email: 'diamond.tiara@test.org',
      profile: {
        name: 'Diamond Tiara',
        role: 'Pony',
        avatar: '/avatars/diamond.tiara.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'dinky.doo',
      password: 'dinky.doo',
      email: 'dinky.doo@test.org',
      profile: {
        name: 'Dinky Doo',
        role: 'Pony',
        avatar: '/avatars/dinky.doo.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'discord',
      password: 'discord',
      email: 'discord@test.org',
      profile: {
        name: 'Discord',
        role: 'Pony',
        avatar: '/avatars/discord.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'dr.whooves',
      password: 'dr.whooves',
      email: 'dr.whooves@test.org',
      profile: {
        name: 'Dr. Whooves',
        role: 'Pony',
        avatar: '/avatars/dr.whooves.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'fancy.pants',
      password: 'fancy.pants',
      email: 'fancy.pants@test.org',
      profile: {
        name: 'Fancy Pants',
        role: 'Pony',
        avatar: '/avatars/fancy.pants.jpg'
      }
    });
    console.info('Account created: ' + userId);

























  }
});
