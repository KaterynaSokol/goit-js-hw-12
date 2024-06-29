// export function picturesTemplate(data) {
//   const markup = data.hits
//     .map(image => {
//       const {
//         webformatURL,
//         largeImageURL,
//         tags,
//         likes,
//         views,
//         comments,
//         downloads,
//       } = image;
//       return;
//       `<li class="card">
//             <a href="${largeImageURL}" class="big gallery-link">
//               <img
//                 src="${webformatURL}"
//                 alt="${tags}"
//                 title="${tags}"
//                 class="card-img"
//             /></a>
//             <ul class="card-title">
//               <li class="card-text-blok">
//                 <h2 class="card-title-text">Likes</h2>
//                 <p class="card-text-value">${likes}</p>
//               </li>
//               <li class="card-text-blok">
//                 <h2 class="card-title-text">Views</h2>
//                 <p class="card-text-value">${views}</p>
//               </li>
//               <li class="card-text-blok">
//                 <h2 class="card-title-text">Comments</h2>
//                 <p class="card-text-value">${comments}</p>
//               </li>
//               <li class="card-text-blok">
//                 <h2 class="card-title-text">Downloads</h2>
//                 <p class="card-text-value">${downloads}</p>
//               </li>
//             </ul>
//           </li>`;
//     })
//     .join('');
// }

export function picturesTemplate(data) {
  return data
    .map(
      img => `<li class="card">
             <a href="${img.largeImageURL}" class="big gallery-link">
               <img
                 src="${img.webformatURL}"
                 alt="${img.tags}"
                 title="${img.tags}"
                 class="card-img"
                 width="360"
                 heigth="200"
             /></a>
            <ul class="card-title">
               <li class="card-info">
                 <h2 class="card-text">Likes</h2>
                 <p class="card-text-value">${img.likes}</p>
             </li>
               <li class="card-info">
                 <h2 class="card-text">Views</h2>
                 <p class="card-text-value">${img.views}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Comments</h2>
                 <p class="card-text-value">${img.comments}</p>
               </li>
               <li class="card-info">
                 <h2 class="card-text">Downloads</h2>
                 <p class="card-text-value">${img.downloads}</p>
               </li>
             </ul> 
           </li>`
    )
    .join('');
}
