// const cursor = document.querySelector('.cursor');
const introMessage = document.querySelector('.intro-message');
const firstLine = 'Привет. Ты попал сюда, потому что кликлнул, куда не надо.';
const secondLine = '<br>Теперь придется читать анекдоты.';
const end = ' Крепись';

const typewriter = new Typewriter(introMessage, {cursorClassName: 'cursor', delay: 50});
typewriter.typeString(firstLine)
          .pauseFor(1000)
          .typeString(secondLine)
          .pauseFor(500)
          .typeString(end)
          .pauseFor(2000)
          .deleteAll(25)
          .start();

const cursor = gsap.to('.cursor', {opacity: 0, ease: "steps(1)", duration: 1, repeat: -1});
// const textTl = gsap.timeline({});
// textTl.to(introMessage, {text: text, duration: 5, ease: Power0.easeNone, yoyo: true})
    //   .to(introMessage, {text: '', duration: 5, ease: Power0.easeNone})
