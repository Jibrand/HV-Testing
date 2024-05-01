const exploreIcons = Promise.all([
  import("./integrate.png"),
  import("./scale.png"),
  import("./velocity.png"),
  import("./continuous.png"),
  import("./community.png"),
]);

const paths = [];

exploreIcons.then((data) => {
  data.forEach((img) => paths.push(img.default));
});


export default paths