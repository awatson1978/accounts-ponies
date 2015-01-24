Package.describe({
  summary: "Adds My Little Ponies to the Meteor.users collection.",


  // update this value before you run 'meteor publish'
  version: "1.0.0",

  // if this value isn't set, meteor will default to the directory name
  name: "awatson1978:accounts-ponies",

  // and add this value if you want people to access your code from Atmosphere
  git: "http://github.com/awatson1978/accounts-ponies.git"
});

Package.on_use(function (api) {
  api.use('accounts-base@1.1.3');
  api.use('accounts-password@1.0.5');

  api.addFiles('initialize.users.js', 'server');

  api.addFiles('ponies/applebloom.jpg', "client", {isAsset: true});
  api.addFiles('ponies/applejack.jpg', "client", {isAsset: true});
  api.addFiles('ponies/berry.punch.jpg', "client", {isAsset: true});
  api.addFiles('ponies/big.mac.jpg', "client", {isAsset: true});
  api.addFiles('ponies/bonbon.jpg', "client", {isAsset: true});
  api.addFiles('ponies/braeburn.jpg', "client", {isAsset: true});
  api.addFiles('ponies/carrot.top.jpg', "client", {isAsset: true});
  api.addFiles('ponies/cheerilee.jpg', "client", {isAsset: true});
  api.addFiles('ponies/crackle.jpg', "client", {isAsset: true});
  api.addFiles('ponies/daring.do.jpg', "client", {isAsset: true});
  api.addFiles('ponies/derpy.hooves.jpg', "client", {isAsset: true});
  api.addFiles('ponies/derpy.joker.jpg', "client", {isAsset: true});
  api.addFiles('ponies/diamond.tiara.jpg', "client", {isAsset: true});
  api.addFiles('ponies/dinky.doo.jpg', "client", {isAsset: true});
  api.addFiles('ponies/discord.jpg', "client", {isAsset: true});
  api.addFiles('ponies/dr.whooves.jpg', "client", {isAsset: true});
  api.addFiles('ponies/fancy.pants.jpg', "client", {isAsset: true});
  api.addFiles('ponies/fleur.de.lis.jpg', "client", {isAsset: true});
  api.addFiles('ponies/flim.flam.jpg', "client", {isAsset: true});
  api.addFiles('ponies/friendship.is.magic.jpg', "client", {isAsset: true});
  api.addFiles('ponies/gilda.jpg', "client", {isAsset: true});
  api.addFiles('ponies/granny.smith.jpg', "client", {isAsset: true});
  api.addFiles('ponies/iron.will.jpg', "client", {isAsset: true});
  api.addFiles('ponies/lily.jpg', "client", {isAsset: true});
  api.addFiles('ponies/lyra.jpg', "client", {isAsset: true});
  api.addFiles('ponies/mayor.jpg', "client", {isAsset: true});
  api.addFiles('ponies/mr.cake.jpg', "client", {isAsset: true});
  api.addFiles('ponies/ms.cake.jpg', "client", {isAsset: true});
  api.addFiles('ponies/octavia.jpg', "client", {isAsset: true});
  api.addFiles('ponies/photo.finish.jpg', "client", {isAsset: true});
  api.addFiles('ponies/pinkie.pie.jpg', "client", {isAsset: true});
  api.addFiles('ponies/pip.jpg', "client", {isAsset: true});
  api.addFiles('ponies/pokey.pierce.jpg', "client", {isAsset: true});
  api.addFiles('ponies/prince.blueblood.jpg', "client", {isAsset: true});
  api.addFiles('ponies/princess.celestia.jpg', "client", {isAsset: true});
  api.addFiles('ponies/princess.luna.jpg', "client", {isAsset: true});
  api.addFiles('ponies/pumpkin.cake.jpg', "client", {isAsset: true});
  api.addFiles('ponies/rainbow.dash.jpg', "client", {isAsset: true});
  api.addFiles('ponies/rarity.jpg', "client", {isAsset: true});
  api.addFiles('ponies/roseluck.jpg', "client", {isAsset: true});
  api.addFiles('ponies/sapphire.shores.jpg', "client", {isAsset: true});
  api.addFiles('ponies/scootaloo.jpg', "client", {isAsset: true});
  api.addFiles('ponies/shutterfly.jpg', "client", {isAsset: true});
  api.addFiles('ponies/silver.spoon.jpg', "client", {isAsset: true});
  api.addFiles('ponies/snails.jpg', "client", {isAsset: true});
  api.addFiles('ponies/snips.jpg', "client", {isAsset: true});
  api.addFiles('ponies/soarin.jpg', "client", {isAsset: true});
  api.addFiles('ponies/spike.jpg', "client", {isAsset: true});
  api.addFiles('ponies/spitfire.jpg', "client", {isAsset: true});
  api.addFiles('ponies/sweetie.belle.jpg', "client", {isAsset: true});
  api.addFiles('ponies/trixie.jpg', "client", {isAsset: true});
  api.addFiles('ponies/twilight.sparkle.jpg', "client", {isAsset: true});
  api.addFiles('ponies/twist.jpg', "client", {isAsset: true});
  api.addFiles('ponies/vinyl.scratch.jpg', "client", {isAsset: true});
  api.addFiles('ponies/zecora.jpg', "client", {isAsset: true});
});
