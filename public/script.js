SC.initialize({
  client_id: "67df025394fb58a59495a2b8f8573ddd"
});

$(document).ready(function() {
  SC.get('/tracks', { genres: 'Rock' }, function(tracks) {
    $(tracks).each(function(index, track) {
      $('#soundcloud-div').append($('<li></li>').html(track.title + ' - ' + track.genre));
    });
  });
});
