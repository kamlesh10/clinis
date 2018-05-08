/*------	MOBILE NAVIGATION  ---------- */
$('.js--nav-icon').click(function() {
    var nav = $('.js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    if (icon.hasClass('ion-navicon-round')) {
        icon.addClass('ion-close-round');
        icon.removeClass('ion-navicon-round')
    } else {
        icon.addClass('ion-navicon-round');
        icon.removeClass('ion-close-round')
    }
});



//Scroll Navigation

$(document).ready(function(){
    var myNavBar = {
    
        flagAdd: true,
    
        elements: [],
    
        init: function (elements) {
            this.elements = elements;
        },
    
        add : function() {
            if(this.flagAdd) {
                for(var i=0; i < this.elements.length; i++) {
                    document.getElementById(this.elements[i]).className += " fixed-theme";
                }
                this.flagAdd = false;
            }
        },
    
        remove: function() {
            for(var i=0; i < this.elements.length; i++) {
                document.getElementById(this.elements[i]).className =
                        document.getElementById(this.elements[i]).className.replace( /(?:^|\s)fixed-theme(?!\S)/g , '' );
            }
            this.flagAdd = true;
        }
    
    };
    
    
    myNavBar.init(  [
        "header",
        "header-container",
        "brand"
    ]);
    function offSetManager(){
    
        var yOffset = 0;
        var currYOffSet = window.pageYOffset;
    
        if(yOffset < currYOffSet) {
            myNavBar.add();
        }
        else if(currYOffSet == yOffset){
            myNavBar.remove();
        }
    
    }
    window.onscroll = function(e) {
        offSetManager();
    }
    offSetManager();
    });




//Navigation Scroll End




// Slide Get Quote Bare

function openNav() {
    document.getElementById("myNav").style.width = "100%";
}
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}

/*------	MAP  ---------- */
	
var map = new GMaps({
    div: '.map',
      lat: 27.7104069,
      lng: 85.48,
    zoom: 12
});

map.addMarker({
  lat: 27.6945946,
  lng: 85.3481404,
  title: 'Lima',
  infoWindow: {
      content: '<p>Clinis Technology <br/> Phone No: +977-9861211775 <br/> Fax: 6021556 <br/>www.clinin.com.au<br/>Email: info@clinis.com.au</p>'
  }
});
