function toggleham(x) {
    x.classList.toggle("change");

    let Mymenu = document.getElementById('Mymenu');
    if (Mymenu.className === 'menu'){
        Mymenu.className += ' menu-active'
    }else{
        Mymenu .className = 'menu'
    }
}

let lastScrollTop = 0;
const navWrapper = document.querySelector('.nav-warpper-newclass');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop === 0) {
        // At the top of the page, hide the nav-warpper-newclass
        navWrapper.classList.remove('show');
    } else if (scrollTop > lastScrollTop) {
        // Scroll down, hide the nav-warpper-newclass
        navWrapper.classList.remove('show');
    } else if (scrollTop < lastScrollTop) {
        // Scroll up, show the nav-warpper-newclass
        navWrapper.classList.add('show');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
});


const textWriterElement = document.querySelector('.textwriter-1');
const texts = [
    "Mr. Verawood Langvong  ",
    "นาย วีรุวฒิ เลี้ยงวงษ์",
];
let textIndex = 0;

function updateText() {
    textWriterElement.textContent = texts[textIndex];
    textIndex = (textIndex + 1) % texts.length;
}

setInterval(updateText, 8000); // เปลี่ยนข้อความทุกๆ 4 วินาที
updateText(); // เรียกครั้งแรกเพื่อเริ่มต้นแสดงข้อความ


// ฟังก์ชันตรวจสอบเมื่อองค์ประกอบถูกเลื่อนมาถึง
function handleScroll() {
    const elements = document.querySelectorAll('.slide-up-on-scroll');
    
    elements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // ตรวจสอบว่าองค์ประกอบอยู่ในหน้าจอหรือไม่
      if (rect.top <= windowHeight && rect.bottom >= 0) {
        element.classList.add('slide-up');
        element.classList.remove('hidden');
      }
    });
  }
  
  // เรียกใช้งานฟังก์ชัน handleScroll เมื่อมีการเลื่อนหน้าเว็บ
  window.addEventListener('scroll', handleScroll);
  
  // เรียกใช้งานตอนโหลดหน้าเว็บครั้งแรกด้วย
  handleScroll();

  
  function myFunction(x) {
    x.classList.toggle("change");
  }


  // script.js
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.box');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target); // หยุดการสังเกตหลังจากกล่องปรากฏ
            }
        });
    }, options);

    boxes.forEach(box => {
        observer.observe(box);
    });
});



document.addEventListener("scroll", function() {
    var content = document.querySelector(".python-content");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("scroll-active");
    }
});

function animateCounter(element, start, end, duration) {
    let startTime = null;

    function updateCounter(currentTime) {
        if (!startTime) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / duration, 1);
        const value = Math.floor(progress * (end - start) + start);
        element.textContent = value + "%";

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }

    requestAnimationFrame(updateCounter);
}

document.addEventListener("scroll", function() {
    var content = document.querySelector(".python-content");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;

    if (contentPosition < screenPosition) {
        content.classList.add("scroll-active");

        var counter = document.getElementById("counter");
        animateCounter(counter, 0, 87, 2000); // ใช้เวลา 2 วินาทีในการเพิ่มค่า 0% เป็น 100%
    }
});


document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        var slideIcon = document.querySelector(".slide-icon");
        slideIcon.classList.add("visible");
    }, 3000); // รอ 4 วินาทีเพื่อแสดง slide-icon

    window.addEventListener("scroll", function() {
        var slideIcon = document.querySelector(".slide-icon");
        var scrollPosition = window.scrollY;

        if (scrollPosition > 50) { // เมื่อเลื่อนลงมากกว่า 50px
            slideIcon.classList.remove("visible");
            slideIcon.classList.add("hidden");
        } else {
            slideIcon.classList.remove("hidden");
            slideIcon.classList.add("visible");
        }
    });
});



function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function animateProgress() {
    const progress = document.getElementById('progress');
    const percentageText = document.getElementById('percentage');
    let currentPercentage = 0;
    const targetPercentage = 87;
    const interval = 20; // ลดจาก 50 มิลลิวินาที
    const increment = 1; // เพิ่มจาก 1
    

    const intervalId = setInterval(() => {
        if (currentPercentage >= targetPercentage) {
            clearInterval(intervalId);
        } else {
            currentPercentage += increment;
            progress.style.width = `${currentPercentage}%`;
            percentageText.innerText = `${currentPercentage}%`;
        }
    }, interval);
}

document.addEventListener('scroll', function() {
    const element = document.querySelector('.python');
    const position = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (position.top < windowHeight && position.bottom >= 0) {
        animateProgress();
        // ลบการฟังเหตุการณ์ scroll เพื่อไม่ให้เรียกใช้งานหลายครั้ง
        document.removeEventListener('scroll', arguments.callee);
    }
});
