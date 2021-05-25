const videoElement = document.querySelector("#video");

async function webcam() {
    let video = await window.navigator.mediaDevices.getUserMedia({video: true , audio: true})
    videoElement.srcObject = await video;
}

webcam();