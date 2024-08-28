// Access the webcam
navigator.mediaDevices.getUserMedia({ video: true })
    .then(function(stream) {
        const video = document.getElementById('video');
        video.srcObject = stream;
        video.play();  // Explicitly play the video stream
    })
    .catch(function(err) {
        console.error("An error occurred: " + err.name + ": " + err.message);
    });


document.addEventListener('DOMContentLoaded', function() {
    const captureButton = document.getElementById('capture');
    const canvas = document.getElementById('canvas');
    const video = document.getElementById('video');

    if (captureButton && canvas && video) {
        captureButton.addEventListener('click', function() {
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            
            // Convert the captured image to a data URL and log it
            const dataURL = canvas.toDataURL('image/png');
            console.log(dataURL);
        });
    } else {
        console.error('One or more elements (capture, canvas, video) are not found in the DOM.');
    }
});
    
