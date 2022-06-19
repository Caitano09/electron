window.onload = async function(){
    const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    })

    document.querySelector('video').srcObject = stream
}
