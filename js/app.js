
var React = require('react');
var Parse = require('parse');
//var Parse = require('parse/node');
// Insert your app's keys here:
Parse.initialize('Jq3E7ktrtc4o7sEVp5zgAebVFUFhN6qjLt8phTYi', 'skMFfxT10KjmpvYl91qQmRQGJEhHfDuzAP8PktvU');


// Parse.Cloud.run('averageStars', { movie: 'The Matrix' }, {
//   success: function(ratings) {
//     // ratings should be 4.5
//     console.log(ratings);
//   },
//   error: function(error) {
//   }
// });

//
var EmailBoltApp = require('./EmailBoltApp.react.js');

React.render(
  <EmailBoltApp />,
  document.getElementById('app')
);

