const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');

function getVideo(){
    // navigator.mediaDevices.getUserMedia({ video: true, audio: false})
    //   .then(localMediaStream) => {
    //       console.log(localMediaStream);
    //       video.src = window.URL.createObjectURL(localMediaStream);
    //       video.play();
    //   }
    //   .catch(err => {
    //       console.error("OH NO!",err);
    //   };
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
          .then(stream => video.srcObject = stream)
          .catch(e => console.log(e.name + ": "+ e.message));
    }
}

function paintToCanvas(){
  const width = video.videoWeight;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {

    ctx.drawImage(video, 0,0,width,height);
  },16);

} 
function takePhoto(){
  snap.currentTime = 0;
  snap.play();

  // Take the data out of canvas
  const data = canvas.toDataURL('image/jpg');
  console.log(data);
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
