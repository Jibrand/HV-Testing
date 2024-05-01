const pocImages = Promise.all([
    import('./CATEN8.png'),
    import('./HEIMDALL.png'),
    import('./PLEXTRAC.png'),
    import('./PROCYON.png'),
    import('./SENTEON.png'),
    import('./SPYDERBAT.png'),
    import('./VIVADERE.png')
])

const images = [];
pocImages.then((data) => {
  data.forEach((img) => images.push(img.default));
});

export default images;