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
        role: "Pony",
        suite: "Spades",
        value: "10",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/applebloom.jpg'
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
        role: "Pony",
        suite: "Spades",
        value: "Jack",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/applejack.jpg'
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
        role: "Pony",
        suite: "Clubs",
        value: "6",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/berry.punch.jpg'
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
        role: "Pony",
        suite: "Spades",
        value: "King",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/big.mac.jpg'
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
        role: "Pony",
        suite: "Spades",
        value: "6",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/bonbon.jpg'
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
        role: "Pony",
        suite: "Hearts",
        value: "King",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/braeburn.jpg'
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
        role: "Pony",
        suite: "Spades",
        value: "8",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/carrot.top.jpg'
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
        role: "Pony",
        suite: "Hearts",
        value: "10",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/cheerilee.jpg'
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
        role: "Pony",
        suite: "Clubs",
        value: "8",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/crackle.jpg'
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
        role: "Pony",
        suite: "",
        value: "",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/daring.do.jpg'
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
        role: "Pony",
        suite: "Diamonds",
        value: "Joker",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/derpy.hooves.jpg'
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
        role: "Pony",
        suite: "Diamonds",
        value: "Joker",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/derpy.joker.jpg'
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
        role: "Pony",
        suite: "Diamonds",
        value: "6",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/diamond.tiara.jpg'
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
        role: "Pony",
        suite: "Spades",
        value: "2",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/dinky.doo.jpg'
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
        role: "Pony",
        suite: "Diamonds",
        value: "King",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/discord.jpg'
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
        role: "Pony",
        suite: "Clubs",
        value: "King",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/dr.whooves.jpg'
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
        role: "Pony",
        suite: "Clubs",
        value: "5",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/fancy.pants.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'fleur.de.lis',
      password: 'fleur.de.lis',
      email: 'fleur.de.lis@test.org',
      profile: {
        name: 'Fleur de Lis',
        role: "Pony",
        suite: "Diamonds",
        value: "7",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/fleur.de.lis.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'flim.flam',
      password: 'flim.flam',
      email: 'flim.flam@test.org',
      profile: {
        name: 'Flim Flam',
        role: "Pony",
        suite: "Clubs",
        value: "4",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/flim.flam.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'friendship.is.magic',
      password: 'friendship.is.magic',
      email: 'friendship.is.magic@test.org',
      profile: {
        name: 'Friendship Is Magic',
        role: "Pony",
        suite: "",
        value: "",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/friendship.is.magic.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'gilda',
      password: 'gilda',
      email: 'gilda@test.org',
      profile: {
        name: 'Gilda',
        role: "Pony",
        suite: "Diamonds",
        value: "3",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/gilda.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'granny.smith',
      password: 'granny.smith',
      email: 'granny.smith@test.org',
      profile: {
        name: 'Granny Smith',
        role: "Pony",
        suite: "Spades",
        value: "Queen",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/granny.smith.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'iron.will',
      password: 'iron.will',
      email: 'iron.will@test.org',
      profile: {
        name: 'Iron Will',
        role: "Pony",
        suite: "Hearts",
        value: "9",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/iron.will.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'lily',
      password: 'lily',
      email: 'lily@test.org',
      profile: {
        name: 'Lily',
        role: "Pony",
        suite: "Hearts",
        value: "3",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/lily.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'lyra',
      password: 'lyra',
      email: 'lyra@test.org',
      profile: {
        name: 'Lyra',
        role: "Pony",
        suite: "Clubs",
        value: "2",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/lyra.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'mayor',
      password: 'mayor',
      email: 'mayor@test.org',
      profile: {
        name: 'Mayor',
        role: "Pony",
        suite: "Spades",
        value: "4",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/mayor.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'mr.cake',
      password: 'mr.cake',
      email: 'mr.cake@test.org',
      profile: {
        name: 'Mr. Cake',
        role: "Pony",
        suite: "Hearts",
        value: "7",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/mr.cake.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'ms.cake',
      password: 'ms.cake',
      email: 'ms.cake@test.org',
      profile: {
        name: 'Ms. Cake',
        role: "Pony",
        suite: "Hearts",
        value: "6",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/ms.cake.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'octavia',
      password: 'octavia',
      email: 'octavia@test.org',
      profile: {
        name: 'Octavia',
        role: "Pony",
        suite: "Clubs",
        value: "3",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/octavia.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'photo.finish',
      password: 'photo.finish',
      email: 'photo.finish@test.org',
      profile: {
        name: 'Photo Finish',
        role: "Pony",
        suite: "Clubs",
        value: "9",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/photo.finish.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'pinkie.pie',
      password: 'pinkie.pie',
      email: 'pinkie.pie@test.org',
      profile: {
        name: 'Pinkie Pie',
        role: "Pony",
        suite: "Hearts",
        value: "Ace",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/pinkie.pie.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'pip',
      password: 'pip',
      email: 'pip@test.org',
      profile: {
        name: 'Pip',
        role: "Pony",
        suite: "Spades",
        value: "7",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/pip.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'pokey.pierce',
      password: 'pokey.pierce',
      email: 'pokey.pierce@test.org',
      profile: {
        name: 'Pokey Pierce',
        role: "Pony",
        suite: "Hearts",
        value: "2",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/pokey.pierce.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'prince.blueblood',
      password: 'prince.blueblood',
      email: 'prince.blueblood@test.org',
      profile: {
        name: 'Prince Blueblood',
        role: "Pony",
        suite: "Diamonds",
        value: "2",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/prince.blueblood.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'princess.celestia',
      password: 'princess.celestia',
      email: 'princess.celestia@test.org',
      profile: {
        name: 'Princess Celestia',
        role: "Pony",
        suite: "Hearts",
        value: "Queen",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/princess.celestia.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'princess.luna',
      password: 'princess.luna',
      email: 'princess.luna@test.org',
      profile: {
        name: 'Princess Luna',
        role: "Pony",
        suite: "Clubs",
        value: "Queen",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/princess.luna.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'pumpkin.cake',
      password: 'pumpkin.cake',
      email: 'pumpkin.cake@test.org',
      profile: {
        name: 'Pumpkin Cake',
        role: "Pony",
        suite: "Hearts",
        value: "8",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/pumpkin.cake.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'rainbow.dash',
      password: 'rainbow.dash',
      email: 'rainbow.dash@test.org',
      profile: {
        name: 'Rainbow Dash',
        role: "Pony",
        suite: "Diamonds",
        value: "Ace",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/rainbow.dash.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'rarity',
      password: 'rarity',
      email: 'rarity@test.org',
      profile: {
        name: 'Rarity',
        role: "Pony",
        suite: "Diamonds",
        value: "Queen",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/rarity.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'roseluck',
      password: 'roseluck',
      email: 'roseluck@test.org',
      profile: {
        name: 'Roseluck',
        role: "Pony",
        suite: "Spades",
        value: "9",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/roseluck.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'sapphire.shores',
      password: 'sapphire.shores',
      email: 'sapphire.shores@test.org',
      profile: {
        name: 'Sapphire Shores',
        role: "Pony",
        suite: "Clubs",
        value: "7",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/sapphire.shores.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'scootaloo',
      password: 'scootaloo',
      email: 'scootaloo@test.org',
      profile: {
        name: 'Scootaloo',
        role: "Pony",
        suite: "Clubs",
        value: "10",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/scootaloo.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'shutterfly',
      password: 'shutterfly',
      email: 'shutterfly@test.org',
      profile: {
        name: 'Shutterfly',
        role: "Pony",
        suite: "Clubs",
        value: "Ace",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/shutterfly.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'silver.spoon',
      password: 'silver.spoon',
      email: 'silver.spoon@test.org',
      profile: {
        name: 'Silver Spoon',
        role: "Pony",
        suite: "Diamonds",
        value: "5",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/silver.spoon.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'snails',
      password: 'snails',
      email: 'snails@test.org',
      profile: {
        name: 'Snails',
        role: "Pony",
        suite: "Hearts",
        value: "5",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/snails.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'snips',
      password: 'snips',
      email: 'snips@test.org',
      profile: {
        name: 'Snips',
        role: "Pony",
        suite: "Hearts",
        value: "4",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/snips.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'soarin',
      password: 'soarin',
      email: 'soarin@test.org',
      profile: {
        name: 'Soarin',
        role: "Pony",
        suite: "Diamonds",
        value: "8",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/soarin.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'spike',
      password: 'spike',
      email: 'spike@test.org',
      profile: {
        name: 'Spike',
        role: "Pony",
        suite: "",
        value: "",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/spike.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'spitfire',
      password: 'spitfire',
      email: 'spitfire@test.org',
      profile: {
        name: 'Spitfire',
        role: "Pony",
        suite: "Hearts",
        value: "Jack",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/spitfire.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'sweetie.belle',
      password: 'sweetie.belle',
      email: 'sweetie.belle@test.org',
      profile: {
        name: 'Sweetie Belle',
        role: "Pony",
        suite: "Diamonds",
        value: "10",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/sweetie.belle.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'trixie',
      password: 'trixie',
      email: 'trixie@test.org',
      profile: {
        name: 'Trixie',
        role: "Pony",
        suite: "Spades",
        value: "3",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/trixie.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'twilight.sparkle',
      password: 'twilight.sparkle',
      email: 'twilight.sparkle@test.org',
      profile: {
        name: 'Twilight Sparkle',
        role: "Pony",
        suite: "Spades",
        value: "Ace",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/twilight.sparkle.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'twist',
      password: 'twist',
      email: 'twist@test.org',
      profile: {
        name: 'Twist',
        role: "Pony",
        suite: "Spades",
        value: "5",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/twist.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'vinyl.scratch',
      password: 'vinyl.scratch',
      email: 'vinyl.scratch@test.org',
      profile: {
        name: 'Vinyl Scratch',
        role: "Pony",
        suite: "Diamonds",
        value: "4",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/vinyl.scratch.jpg'
      }
    });
    console.info('Account created: ' + userId);

    // crate our administrator
    userId = Accounts.createUser({
      username: 'zecora',
      password: 'zecora',
      email: 'zecora@test.org',
      profile: {
        name: 'Zecora',
        role: "Pony",
        suite: "Clubs",
        value: "Jack",
        avatar: '/packages/awatson1978_accounts-ponies/ponies/zecora.jpg'
      }
    });
    console.info('Account created: ' + userId);




  }
});
