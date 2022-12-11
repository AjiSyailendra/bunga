// var x = document.getElementById("myAudio");


// Swal.fire({
//         title: "SURPRISEE",
//         timer: 500,
//         imageUrl: "./assets/pentolawal.gif",
//         imageWidth: 250,
//         imageHeight: 250,
//         timerProgressBar: true,
//         showConfirmButton: false,
// }).then((res) => {
//         if (res.isConfirmed) {
//                 x.play()
//         }
// })

var x = document.getElementById("myAudio");

onload = () => {
        Swal.fire({
                title: "SIAPP?",
                timer: 500,
                text: "Klik OK jika siap yak",
                imageUrl: "./assets/pentolawal.gif",
                imageHeight: 200,
                // showConfirmButton: false
        }).then((res) => {
                res.isConfirmed = true
                if (res.isConfirmed) {
                        x.play();
                }
        })
}