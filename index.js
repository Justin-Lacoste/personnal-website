function openCV() {
     window.open('cv.pdf');
}

console.log("in here!!!")


var winScrollTop = 0;

//utility - check if element is in view
$.fn.is_on_screen = function () {
  var win = $(window);
  var viewport = {
    top: win.scrollTop(),
    left: win.scrollLeft()
  };
  //viewport.right = viewport.left + win.width();
  viewport.bottom = viewport.top + win.height();

  var bounds = this.offset();
  //bounds.right = bounds.left + this.outerWidth();
  bounds.bottom = bounds.top + this.outerHeight();

  return !(viewport.bottom < bounds.top || viewport.top > bounds.bottom);
};

function parallax() {
  var scrolled = $(window).scrollTop();
  $(".parallax").each(function () {
    if ($(this).is_on_screen()) {
      var firstTop = $(this).offset().top;
      var moveTop = (firstTop - winScrollTop) * $(this).attr("data-speed");
      $(this).css("transform", "translateY(" + -Math.min(0, moveTop) + "px)");
    }
  });
}

$(window).scroll(function () {
  winScrollTop = $(this).scrollTop();
  parallax();
});

//change zindex on hover - not really necessary but its just nice to have
$(".parallax").on("mouseover", function () {
  $(this).css("z-index", "99");
});
$(".parallax").on("mouseout", function () {
  $(this).css("z-index", "initial");
});





$.fn.isOnScreen = function(){

    var win = $(window);

    var viewport = {
        top : win.scrollTop(),
        left : win.scrollLeft()
    };
    viewport.right = viewport.left + win.width();
    viewport.bottom = viewport.top + win.height();

    var bounds = this.offset();
    bounds.right = bounds.left + this.outerWidth();
    bounds.bottom = bounds.top + this.outerHeight();

    return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

previous_page = 0
current_page = 0

$(document).ready(function(){
    $(window).scroll(function(){
        if ($('#inViewport-1').isOnScreen()) {
            current_page = 1
            if (current_page != previous_page) {
                previous_page = 1
                $(".to-be-animated").removeClass('project-name-animated');
                window.setTimeout(function() {
                    $('.to-be-animated').css('color', 'rgba(0,0,0,0)')
                    $('#project-name').text(projects.project1.name);
                    $('#project-description').text(projects.project1.description);
                    $('#go-to-project-text').text("Go to project");
                    $('#project-type').text(projects.project1.type);
                    $(".to-be-animated").addClass('project-name-animated');
                    $("#go-to-project-button").unbind("click");
                    $("#go-to-project-button").click(goToAutonotes)
                }, 50);
                window.setTimeout(function() {
                    $('.to-be-animated').css('color', 'white')
                    $("#project-type").css('color', 'rgba(253, 16, 86, 1)')
                    $("#go-to-project-button").css('border-color', '#08fdd8')
                }, 750);
            }
        }
        if ($('#inViewport-2').isOnScreen()) {
            // The element is visible, do something
            current_page = 2
            if (current_page != previous_page) {
                previous_page = 2
                $(".to-be-animated").removeClass('project-name-animated');
                window.setTimeout(function() {
                    $('.to-be-animated').css('color', 'rgba(0,0,0,0)')
                    $('#project-name').text(projects.project2.name);
                    $('#project-description').text(projects.project2.description);
                    $('#go-to-project-text').text("Go to project");
                    $('#project-type').text(projects.project2.type);
                    $(".to-be-animated").addClass('project-name-animated');
                    $("#go-to-project-button").unbind("click");
                    $("#go-to-project-button").click(goToPredictor)
                }, 50);
                window.setTimeout(function() {
                    $('.to-be-animated').css('color', 'white')
                    $("#project-type").css('color', 'rgba(253, 16, 86, 1)')
                    $("#go-to-project-button").css('border-color', '#08fdd8')
                }, 750);
            }
        }
        else {
            // The element is NOT visible, do something else
        }
    });
});


projects = 
    { project1: {
        name: "Autonotes",
        description: "Autonotes is an app that allow students to record their class and follow along the transcript using speech-to-text",
        type: "IOS APP"
    },
    project2: {
        name: "Coin-Oracle",
        description: "Webapp that predicts cryptocurrencies using a RNN",
        type: "ML-POWERED WEB APP"
    }
}









const myTags = [
    'JavaScript', 'CSS', 'HTML',
    '.NET Core', 'Node.js', 'PHP',
    'React', 'React Native', 'SQL',
    'NoSQL', 'AWS', 'GIT'
];
var tagCloud = TagCloud('.content', myTags,{
  radius: 200,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
});
document.querySelector('.content').style.color = '#FD1056';
document.querySelector('.content').style.fontFamily = 'Poppins';
document.querySelector('.content').style.fontSize = '25px';


const myTagsTwo = [
    'SQL', 'R', 'Keras', 'Numpy', 'Matplotlib', 'Machine Learning', 'Pandas', 'Python'
];
var tagCloud = TagCloud('.content_two', myTagsTwo,{
  radius: 200,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
});
document.querySelector('.content_two').style.color = '#08fdd8';
document.querySelector('.content_two').style.fontFamily = 'Poppins';
document.querySelector('.content_two').style.fontSize = '25px';


const myTagsThree = [
    'Java', 'Python', 'C#', 'C', 'Bash', 'OCaml'
];
var tagCloud = TagCloud('.content_three', myTagsThree,{
  radius: 200,
  maxSpeed: 'fast',
  initSpeed: 'fast',
  // 0 = top
  // 90 = left
  // 135 = right-bottom
  direction: 135,
  // interact with cursor move on mouse out
  keep: true
});
document.querySelector('.content_three').style.color = '#FD1056';
document.querySelector('.content_three').style.fontFamily = 'Poppins';
document.querySelector('.content_three').style.fontSize = '25px';









