var x = document.getElementById("myAudio");

Swal.fire({
  title: "SIAPP?",
  text: "Klik OK jika siap yak",
  imageUrl: "./assets/pentolawal.gif",
  imageHeight: 200,
}).then((res) => {
  if (res.isConfirmed) {
    document.body.classList.remove("not-loaded");
    x.play();
  }
})