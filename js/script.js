$(document).ready(function(){

var tweetCompose = $('#tweet-content > .tweet-compose');
var charCount = $('#char-count');

tweetCompose.on('click', function(){
    tweetCompose.css({height: '5em'});
    $('#tweet-controls').show();
})

$(document).mouseup(function (e){
    if (!tweetCompose.is(e.target) 
        && tweetCompose.has(e.target).length === 0){
        $('#tweet-controls').hide();
        tweetCompose.css({height: '2.5em'});
    }
});

$('.tweet-compose').keyup(function() {
    var maxLength = 140;
    var length = $(this).val().length;
    var length = maxLength-length;
    charCount.text(length);
});

$('.tweet-compose').keyup(function() {
    if ($(this).val().length > 130) {
        charCount.css({color: 'red'});
    } else {
        charCount.css({color: '#999'});
    }
    if ($(this).val().length > 140) {
        $('#tweet-controls > #tweet-submit').prop('disabled', true);
    } else {
        $('#tweet-controls > #tweet-submit').prop('disabled', false);
    }
});






















});