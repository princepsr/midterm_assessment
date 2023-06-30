const photoContainer = document.querySelector(".photo-container");

fetch("https://jsonplaceholder.typicode.com/photos")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((photo) => {
      const photoCard = document.createElement("div");
      photoCard.classList.add("photo-card");

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = photo.title;

      const title = document.createElement("h2");
      title.textContent = photo.title;

      photoCard.appendChild(img);
      photoCard.appendChild(title);
      photoContainer.appendChild(photoCard);
    });
  })
  .catch((error) => console.log(error));
