import noImage from "../BKUI/image/noImage.png";
const OptimisedImage = (background_image: string) => {
  const target = "media/";
  if (!background_image) return noImage;
  const index = background_image.indexOf(target) + target.length;
  return (
    background_image.slice(0, index) +
    "crop/600/400/" +
    background_image.slice(index)
  );
};

export default OptimisedImage;
