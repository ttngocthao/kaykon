var xhr = new XMLHttpRequest();
const galleryWrapper = document.getElementById("gallery-wrapper");
xhr.open("GET", "./api/imgData.json", true);
xhr.responseType = "text";

xhr.onload = function() {
  if (xhr.status === 200) {
    var imgDb = JSON.parse(xhr.responseText);
    console.log(imgDb);
    for (let i = 0; i < imgDb.length; i++) {
      console.log(imgDb[i]);
      galleryWrapper.innerHTML += albumTemp(imgDb[i]);
    }
  } else {
    console.log("Error", xhr.statusText);
  }
};
xhr.send();

//album template
const albumTemp = obj => {
  return `
<section class='album-container'>
  <h2>${obj.albumName}</h2>
  <ul class='photo-wrapper'>
    ${obj.photoUrls.map(url => photoTemp(url)).join("")}
  </ul>
</section>`;
};

const modalBox = imgUrl => {
  return `<div class='modalBox'>
    <div class='closeBtn'>&times;</div>
    <div class='modalBox-content'>
      <img src='${imgUrl}'>
    </div>
  </div>`;
};

const photoTemp = photo => {
  return `<li class='viewImg' key='${photo}' style='background-image: url(${photo})'></li>`;
};

$(document).ready(() => {
  $("li.viewImg").on("click", function() {
    const imgUrl = $(this).attr("key");
    $("#view-individual").html(modalBox(imgUrl));
    $(".modalBox").css("display", "block");
    // alert($(this).data());
    console.log($(this).attr("key"));
    $(".closeBtn").on("click", () => {
      // alert("close btn is clicked");
      $(".modalBox").css("display", "none");
    });
  });
});
