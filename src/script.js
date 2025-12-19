  const textanimate = document.getElementById('text-anime');
        const womanImage = document.getElementById('woman-image');
        const initialScale = 1.0;
        const finalScale = 1.7;
        const finalOpacity = 0.1; 
        const startEffect = 100;
        const endEffect = 500;   
        const parallaxStart = 0;
        const parallaxEnd = 700; 
        const parallaxSpeed = 0.4; 
        const boxes = document.querySelectorAll('.box');
        const boxExitStart = 900;
        const boxExitDuration = 300;
        const maxExitTranslationY = -60; 
        const maxExitRotationX = 85; 

        window.addEventListener('scroll', () => {
            let st = window.scrollY;
            if (st >= startEffect && st <= endEffect) {
                const scrollProgress = (st - startEffect) / (endEffect - startEffect);
                const currentScale = initialScale + (finalScale - initialScale) * scrollProgress; 
                const currentRotation = 3 * scrollProgress; 
                const currentOpacity = 1.0 - (0.9 * scrollProgress); 
                textanimate.style.opacity = currentOpacity.toFixed(2);
                textanimate.style.transform = `scale(${currentScale.toFixed(2)}) rotateZ(${currentRotation.toFixed(1)}deg) translateZ(0)`; 
            } else if (st < startEffect) {
                textanimate.style.opacity = '1.0';
                textanimate.style.transform = `scale(${initialScale}) rotateZ(0deg) translateZ(0)`;
            } else {
                textanimate.style.opacity = finalOpacity.toFixed(1);
                textanimate.style.transform = `scale(${finalScale}) rotateZ(3deg) translateZ(0)`;
            }
           if (st >= parallaxStart && st <= parallaxEnd) { 
        const yPos = st * parallaxSpeed;
        womanImage.style.transform = `translateY(${yPos * 0.5}px)`;
    } else if (st > parallaxEnd) {
         womanImage.style.transform = `translateY(${parallaxEnd * 0.5}px)`;
    } else {
        womanImage.style.transform = `translateY(0px)`;
    }
            boxes.forEach((box, index) => {
               
                const boxStartScroll = boxExitStart + (index * 200); 
                const boxEndScroll = boxStartScroll + boxExitDuration;
                let boxMovement = 0;
                let boxOpacity = 1;
                let boxRotation = 0;
                let exitProgress = 0;
                if (st > boxStartScroll) {
                    exitProgress = (st - boxStartScroll) / boxExitDuration;
                    if (exitProgress > 1) exitProgress = 1;
                }
                
                if (exitProgress > 0) {
                    boxMovement = exitProgress * maxExitTranslationY;
                    
                    boxRotation = exitProgress * maxExitRotationX;
                    boxOpacity = 1 - exitProgress; 
                }

                box.style.transform = `translateY(0, ${boxMovement}px, 0) rotateY(${boxRotation}deg)`;
                box.style.opacity = boxOpacity.toFixed(2);
                box.style.transition = 'transform 0.05s linear, opacity 0.05s linear'; 
            });
        });
        
      
        boxes.forEach(box => {
          
            const resetTransform = () => {
                if (parseFloat(box.style.opacity) >= 0.95 || box.style.opacity === '' || box.style.opacity === '1') {
                    box.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
                    box.style.transition = 'transform 0.3s ease'; 
                }
            };

            box.addEventListener('mousemove', (e) => {
              
                if (parseFloat(box.style.opacity) >= .95 || box.style.opacity === '') {
                    const rect = e.target.getBoundingClientRect();
                    const centerX = rect.left + rect.width / 2;
                    const centerY = rect.top + rect.height / 2;
                    
                    const xOffset = (e.clientX - centerX) / 100; 
                    const yOffset = (e.clientY - centerY) / 100; 
                    
                    const rotateY = xOffset * -15; 
                    const rotateX = yOffset * 15;  
                    
                    const translateZ = 20; 

                    e.target.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
                    e.target.style.transition = 'transform 0.9s linear';
                }
            });

          
            box.addEventListener('mouseleave', resetTransform);
        });

const skillsBg = document.getElementById("skills-bg");
const skillsTitle = document.getElementById("skills-title");
const skillsCards = document.getElementById("skills-cards");

window.addEventListener("scroll", () => {
    let st = window.scrollY;

    const startScroll = 300;  
    const endScroll = 2200;   

    if(st >= startScroll && st <= endScroll){
        const progress = (st - startScroll) / (endScroll - startScroll);

      
        skillsBg.style.transform = `translateY(${progress * 100}px) scale(1.05)`;

        
        skillsTitle.style.transform = `translateY(${progress * 600}px)`;
        skillsTitle.style.opacity = (1 - progress).toFixed(2);

      
        skillsCards.style.transform = `translateX(${progress * 15}px) perspective(800px) rotateX(${progress*865}deg)`;
    } else if(st < startScroll){
        skillsBg.style.transform = `translateX(0px)`;
        skillsTitle.style.transform = `translateX(0px)`;
        skillsTitle.style.opacity = 1;
        skillsCards.style.transform = `translateX(0px) perspective(800px) rotateX(0deg)`;
    } else if(st > endScroll){
        skillsBg.style.transform = `translateY(100px) scale(2.05)`;
        skillsTitle.style.transform = `translateX(150px)`;
        skillsTitle.style.opacity = 0;
        skillsCards.style.transform = `translateX(700px) perspective(800px) rotateX(90deg)`;
    }
});
document.addEventListener("scroll", () => {

  const section = document.getElementById("apple-horizontal");
  const container = document.getElementById("apple-images");
  const images = document.querySelectorAll(".apple-img");

  const rect = section.getBoundingClientRect();
  const start = window.innerHeight;
  const end = section.offsetHeight - window.innerHeight;

  const scrollProgress = Math.min(
    Math.max((window.innerHeight - rect.top) / end, 0),
    1
  );

  const maxX = container.scrollWidth - window.innerWidth;
  const moveX = -scrollProgress * maxX;

  container.style.transform = `translateX(${moveX}px)`;
  images.forEach((img, i) => {
    const imgOffset = i / images.length;
    const diff = Math.abs(scrollProgress - imgOffset);

    const scale = Math.max(1 - diff * 0.3, 1);
    

    img.style.transform = `scale(${scale})`;
  
  });
});
////////////////////////////////////////////////////////////////////

const lastSection = document.getElementById("container");
const leftItems = document.querySelectorAll("#left p");
const rightItems = document.querySelectorAll("#right p");
const circleNumber = document.getElementById("circle");

let currentValue = 0;

window.addEventListener("scroll", () => {
    const rect = lastSection.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top < windowHeight && rect.bottom > 0) {

        const progress = 0.6 - rect.top / windowHeight;
        const clamped = Math.min(Math.max(progress, 0), 1);

        
        const targetValue = Math.floor(clamped * 600);
        if (targetValue !== currentValue) {
            currentValue = targetValue;
            circleNumber.innerText = currentValue;
        }

        
        const circleMove = clamped * 800;  
        circleNumber.style.transform = `translateY(${circleMove}px)`;


        
        const totalItems = leftItems.length;
        const step = 1 / totalItems;

        function animateItems(list) {
            list.forEach((p, i) => {
                const itemProgress = (clamped - i * step) / step;
                const itemClamp = Math.min(Math.max(itemProgress, 0), 1);

                const scale = 1.5 + itemClamp * 0.7;
                const translateZ = itemClamp * 150;
                const opacity = 0.4 + itemClamp * 0.7;

                p.style.transform = `translateZ(${translateZ}px) scale(${scale})`;
                p.style.opacity = opacity.toFixed(2);
            });
        }

        animateItems(leftItems);
        animateItems(rightItems);
    }
});

const box = document.getElementById("typing-box");
const dots = document.querySelectorAll(".step-dot");
const messages = [
    "Clean UI/UX with pixel-perfect accuracy.",
    "Advanced React components with dynamic motion.",
    "Fully responsive layouts for any device.",
    "Performance optimized and SEO-ready design."
];

let currentStep = -1;
let typing = false;


function typeText(text, callback) {
    box.innerHTML = "";
    let cursor = document.createElement("span");
    cursor.classList.add("typing-cursor");
    box.appendChild(cursor);

    let i = 0;
    typing = true;

    function typingLoop() {
        if (i < text.length) {
            cursor.insertAdjacentText("beforebegin", text[i]);
            i++;
            setTimeout(typingLoop, 40);
        } else {
            typing = false;
            callback && callback();
        }
    }

    typingLoop();
}

function clearBox() {
    box.innerHTML = "";
}

window.addEventListener("scroll", () => {
    const section = document.getElementById("scroll-typing-section");
    const rect = section.getBoundingClientRect();
    const vh = window.innerHeight;

    if (rect.top <= 0 && rect.bottom >= vh) {
        
        const progress = Math.abs(rect.top) / (section.offsetHeight - vh);
        const step = Math.floor(progress * messages.length);

        if (step !== currentStep && step < messages.length && !typing) {
            currentStep = step;

            dots.forEach((d, i) => d.classList.toggle("active", i === step));

            clearBox();
            typeText(messages[step]);
        }
    }
});

// ////////////////////////
const footer = document.getElementById("parallax-footer");
const footerImg = footer.querySelector("img");

window.addEventListener("scroll", () => {
  const rect = footer.getBoundingClientRect();
  const windowHeight = window.innerHeight;

  if(rect.top < windowHeight && rect.bottom > 0){
    const progress = 1 - (rect.bottom / windowHeight);
    footerImg.style.transform = `translateY(${progress * 300}px) scale(${1 + progress * .9})`;
  }
});


