document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementById("title");
  const grid = document.getElementById("grid");
  const submitButton = document.getElementById("submit");

  const urlParams = new URLSearchParams(window.location.search);
  const keyword = urlParams.get("keyword");
  title.textContent = `Please find the image that describes a ${keyword}`;
  images = config[keyword].sort(() => 0.5 - Math.random());

  images.forEach((image, index) => {
    const imageContainer = document.createElement("div");
    imageContainer.className = "image-container";
    if (image.split("/").pop().split("-")[0] === keyword) {
      imageContainer.classList.add("answer");
    }
    imageContainer.innerHTML = `
                    <img src="${image}" alt="${index}">
                    <div class="checkbox"></div>
                `;
    imageContainer.addEventListener("click", () => {
      imageContainer.classList.toggle("selected");
    });
    grid.appendChild(imageContainer);
  });

  submitButton.addEventListener("click", () => {
    const allImages = document.querySelectorAll(".image-container");
    allImages.forEach((container) => {
      const isAns = container.classList.contains("answer");
      const isSelected = container.classList.contains("selected");
      if ((isAns && isSelected) || (!isAns && !isSelected)) {
        container.classList.add("correct");
      } else {
        container.classList.add("incorrect");
      }
    });

    submitButton.disabled = true;
  });
});
