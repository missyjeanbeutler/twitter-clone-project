$(document).ready(function(){

var tweetCompose = $('#tweet-content > .tweet-compose');
var tweetComposeText = $('.tweet-compose').val();
var charCount = $('#char-count');
var tweet = function(tweetText){ return '<div class="tweet">' +
						'<div class="content">'+
							'<img class="avatar" src="img/funwatercat.jpg" />'+
							'<strong class="fullname">The Onion</strong>'+
							'<span class="username">@theonion</span>'+
							'<p class="tweet-text">'+tweetText+'</p>'+
							'<div class="tweet-actions">'+
								'<ul>'+
									'<li><span class="icon action-reply"></span> Reply</li>'+
									'<li><span class="icon action-retweet"></span> Retweet</li>'+
									'<li><span class="icon action-favorite"></span> Favorite</li>'+
									'<li><span class="icon action-more"></span> More</li>'+
								'</ul>'+
							'</div>'+
							'<div class="stats">'+
								'<div class="retweets">'+
									'<p class="num-retweets">30</p>'+
									'<p>RETWEETS</p>'+
								'</div>'+
								'<div class="favorites">'+
									'<p class="num-favorites">6</p>'+
									'<p>FAVORITES</p>'+
								'</div>'+
								'<div class="users-interact">'+
									'<div>'+
										'<img src="img/jennyshen.jpg" />'+
										'<img src="img/damenleeturks.jpg" />'+
									'</div>'+
								'</div>'+
								'<div class="time">'+
									'1:04 PM - 19 Sep 13'+
								'</div>'+
							'</div>'+
							'<div class="reply">'+
								'<img class="avatar" src="img/alagoon.jpg" />'+
								'<textarea class="tweet-compose" placeholder="Reply to @theonion"/></textarea>'+
							'</div>'+
						'</div>'+
					'</div>'}

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

tweetCompose.keyup(function() {
    var maxLength = 140;
    var length = $(this).val().length;
    var length = maxLength-length;
    charCount.text(length);
});

tweetCompose.keyup(function() {
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

$('#tweet-submit').on('click', function(){
    var tweetText = tweetCompose.val();
        console.log(tweetComposeText);
    if (tweetText.length <= 140) {
        $('#stream').prepend(tweet(tweetCompose.val()));
        tweetCompose.val("Compose new Tweet...");
    }
})


























});