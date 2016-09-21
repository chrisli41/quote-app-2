/**
 * Created by christopherli on 9/16/16.
 */
function randomize(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function success(data){
    var quoteText = data['quote'];
    var quoteAuthor = data['character'];

    var link = 'http://twitter.com/share?text=' + quoteText;

    $('#text').text(quoteText);
    $('#author').text("- " + quoteAuthor);
    $('#share').attr('href', link);
}

$(document).ready(function(){

    var colors = ['#0099cc', '#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];

    /*
    var apiCall = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
    */
    var apiCall = 'https://got-quotes.herokuapp.com/quotes';

    $.getJSON(apiCall, success);

    $('#new-quote').click(function(){

        var color = randomize(0, colors.length - 1);

        $.getJSON(apiCall, success);
        
        $("html body").animate({
            backgroundColor: colors[color],
            color: colors[color]
        }, 1000);

        $("#new-quote, #twit").animate({
            backgroundColor: colors[color]
        }, 1000);

        }
    );

});
