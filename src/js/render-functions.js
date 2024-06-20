export function createImagesMarkup({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img class="gallery-image" src="${webformatURL}" alt="${tags}" />
        </a>
        <ul class="statistic">
        <li class="statistic-item">
          <p class="statistic-text">Likes<span class="statistic-item-span">${likes}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Views<span class="statistic-item-span">${views}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Comments<span class="statistic-item-span">${comments}</span></p>
        </li>
        <li class="statistic-item">
          <p class="statistic-text">Downloads<span class="statistic-item-span">${downloads}</span></p>
        </li></ul>
      </li>`;
}
