const canvas = document.querySelector('.photo');
const video = document.querySelector('.player');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const ctx = canvas.getContext('2d');

//获取摄像头的权限
function getVideo() {
  //这里是获取一个promise对象，是打开摄像头的数据流
  navigator.mediaDevices.getUserMedia({video: true, audio: false})
    .then(localMediaStream => {
      //将blob数据流加进video的src中
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      //得加上play才能使动画连贯起来，不然动画不会动
      video.play();
    })
    .catch(err => {
      console.log('OH, Error' + err.name);
    });
}

getVideo();