const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '536bd00c064dc50931b1b2b5221fc357',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500${imgPath}`,
}


export default apiConfig;