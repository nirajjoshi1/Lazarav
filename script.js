function navAnimation() {
    var nav = document.querySelector("nav");
    let navbtm = document.querySelector("#nav-bottom");


    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline();

        tl.to("#nav-bottom", {
            height: "18vh",
        })
        tl.to("#nav2 h5", {
            display: "block",
        })

        tl.to("#nav2 h5 span", {
            y: 0,
            stagger: {
                amount: 0.6
            }
        });
    });


    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline();
        tl.to("#nav2 h5 span", {
            y: "25px",
            stagger: {
                amount: 0.2
            }
        })
        tl.to("#nav2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to("#nav-bottom", {
            height: 0,
            duration: 0.3,
        });
    })

}
function secondPageAnim() {
    document.querySelectorAll(".right-elem")
        .forEach(function (elem) {
            elem.addEventListener("mouseenter", function () {
                gsap.to(elem.childNodes[3], {
                    opacity: 1,
                    scale: 1,
                })
            });
            elem.addEventListener("mouseleave", function () {
                gsap.to(elem.childNodes[3], {
                    opacity: 0,
                    scale: 0,
                })
            });
            elem.addEventListener("mousemove", function (dets) {
                gsap.to(elem.childNodes[3], {
                    x: dets.x - elem.getBoundingClientRect().x - 10,
                    y: dets.y - elem.getBoundingClientRect().y - 10
                })
            })
        })
}

function thirdPageAnimation() {
    var page3Center = document.querySelector("#page3-center")
    var video = document.querySelector("#page3 video")
    let icon = document.querySelector(".icon");
    let iconimg = document.querySelector("#img");

    page3Center.addEventListener("click", function () {
        video.load();
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })
    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
    icon.addEventListener("click", function () {
        iconimg.style.display = "none";
    })
    video.addEventListener("click", function () {
      iconimg.style.display = "block";
    });
}
function fourthPage(){
    $(document).ready(function () {
      var toggleSound = $("#toggleSound")[0];
      var openSound = $("#openSound")[0];
      var hoverSound = $("#hoverSound")[0];

      let menuToggle = document.querySelector(".menuToggle");
      let menu = document.querySelector(".menu");

      menuToggle.onclick = function () {
        menu.classList.toggle("active");
        toggleSound.currentTime = 0; // Reset the audio to start from the beginning
        toggleSound.play();
        if (menu.classList.contains("active")) {
          openSound.currentTime = 0; // Reset the audio to start from the beginning
          openSound.play();
        }
      };

      $("a").mouseenter(function () {
        hoverSound.currentTime = 0; // Reset the audio to start from the beginning
        hoverSound.play();
      });
    });
}
fourthPage();
thirdPageAnimation();
secondPageAnim();
navAnimation();