const audio = document.getElementById("audioProduction");
const photo = document.getElementById("photography");
const video = document.getElementById("videoProduction");
const videos = document.getElementById("videos");
const picture = document.getElementById("pictures")


const showAudio = () => {
    audio.style.display = "block";
    video.style.display = "none";
    photo.style.display = "none";
    
}
const showPhotography = () => {
    photo.style.display = "block";
    video.style.display = "none";
    audio.style.display = "none";
    
}
const showVideo = () => {
    video.style.display = "block";
    photo.style.display = "none";
    audio.style.display = "none";

}

const showVideos = () => {
    videos.style.display = "flex";
    picture.style.display = "none";
}

const showPictures = () => {
    picture.style.display = "block";
    video.style.display = "none";
}

