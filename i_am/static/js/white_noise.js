const addHiddenClass = function(){
    // noise_wrapper.classList.add('hidden');
    window.location.href = "/old";
};

function tl_begin(){
    const tl_begin = gsap.timeline();
    tl_begin.to(turb, {attr:{baseFrequency: "0.3 0"}, duration: 0.15})
        .to(turb, {attr:{baseFrequency: "0.1 0"}, duration: 0.15})
        .to(turb, {}, "+=0.7")
        // .to(turb, {attr:{baseFrequency: "0.3 0"}, duration: 0.15})
        // .to(turb, {attr:{baseFrequency: "0.3 0.3"}, duration: 0.5}, "+=0.7");

    return tl_begin
};

function tl_noise(repeat){
    const tl_noise = gsap.timeline({repeat: repeat});
    tl_noise.to(turb, {attr:{baseFrequency: "0.9 0.9"}, duration: 0.1})
            .to(turb, {attr:{baseFrequency: "0.8 0.8"}, duration: 0.1})
            .to(turb, {attr:{baseFrequency: "0.9 0.9"}, duration: 0.3});

    return tl_noise
};

function tl_end(){
    const tl_end = gsap.timeline();
    tl_end.to(turb, {attr:{baseFrequency: "0 0.3"}, duration: 0.15})
          .to(turb, {}, "+=2");

    return tl_end
}

function tl_to_white(duration){
    const tl_white = gsap.timeline();
    tl_white.to(noise_wrapper, {background: "rgb(255, 255, 255, 1)", duration: duration});

    return tl_white
}

const noise_button = document.querySelector('.noise_button');
const noise_wrapper = document.querySelector('.noise_wrapper');
const section = document.querySelector('section#white_noise');
const turb = document.querySelector('feTurbulence');


noise_button.addEventListener('click', function(){
    noise_wrapper.classList.remove('hidden');
    section.classList.add('fucking_noise');

    const tl_master = gsap.timeline({onComplete: addHiddenClass});
    tl_master.add(tl_begin())
             .add("to_white")
             .add(tl_to_white(5))
             .add(tl_noise(10), "to_white")
             .add("to_end")
             .add(tl_end(), "to_end");
      
    console.log('Конец')
    // window.history.pushState({}, '', 'old')
})