const images = [
    {url: "./images/1.png",
alt: "slide-1",},
{url: "./images/2.png",
alt: "slide-2",},
{url: "./images/3.png",
alt: "slide-3",},
{url: "./images/4.png",
alt: "slide-4",},
{url: "./images/5.png",
alt: "slide-5",},
{url: "./images/6.png",
alt: "slide-6",},
{url: "./images/7.png",
alt: "slide-7",},
{url: "./images/8.png",
alt: "slide-8",},
{url: "./images/9.png",
alt: "slide-9",},
{url: "./images/10.png",
alt: "slide-10",},
{url: "./images/11.png",
alt: "slide-11",},
{url: "./images/12.png",
alt: "slide-12",},
{url: "./images/13.png",
alt: "slide-13",},
{url: "./images/14.png",
alt: "slide-14",},
{url: "./images/15.png",
alt: "slide-15",}
]


const galleryEl = document.querySelector (".presentation");
const galleryMarkup = images
  .map(
    img =>
    `<li class="gallery-item">
    <a class="gallery-link" href="${img.url}">
      <img
        class="gallery-image"
        src="${img.url}"
        data-source="${img.url}"
        alt="${img.alt}"
      />
    </a>
  </li>`
  )
  .join('');

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

let imgOnClick;

const selectImg = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  imgOnClick = event.target.dataset.source;
  const modalEl = basicLightbox.create(
    `
    <img width="1400" height="800" src="${imgOnClick}">
  `
  );
  modalEl.show();
};

galleryEl.addEventListener("click", selectImg);