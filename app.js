const app = () => {
    const song = document.querySelector(".song");
    const play = document.querySelector(".play");
    const outline = document.querySelector(".moving-outline circle");
    const video = document.querySelector(".vid-container video");

    //Sounds
    const sounds = document.querySelectorAll(".sound-picker button");
    //Time Display
    const timeDisplay = document.querySelector(".time-display");
    //Get the length oof the outline
    const outlineLength = outline.getTotalLength();
    //Duration
    let fakeDuration = 600;

    outline.style.strokeDasharray = outlineLength;
    outline.style.strokeDashoffset = outlineLength;
    //play sound
    play.addEventListener("click", () =>{
        checkPlaying(song);
    });
    //Create a function spefic to stop and play yhe sounds
    const checkPlaying = song =>{
        if(song.paused){
        song.play();
        video.play();
        play.src = "./svg/pause.svg";
    }else{
        song.pause();
        video.pause();
        play.src = "./svg/play.svg";
    }
};

    //we can animated the circle
    song.ontimeupdate = () => {
        let currentTime = song.currentTime;
        let elapsed = fakeDuration - currentTime;
        let seconds = Math.floor(elapsed % 60);
        let minutes = Math.floor(elapsed / 60);

    //Animate the circle
    let progress = outlineLength - ( currentTime / fakeDuration) * outlineLength;
    outline.style.strokeDashoffset = progress;
    
    
    //Animate
    }
};
app();