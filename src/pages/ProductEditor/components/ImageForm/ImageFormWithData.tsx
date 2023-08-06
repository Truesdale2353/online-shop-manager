import { ImageForm } from "./ImageForm";
import { useImageGallery } from "../../hooks/useImageGallery";
const ImageFormWithData = () => {
  const [images, uploadImage, deleteImage] = useImageGallery();

  return (
    <ImageForm
      images={images}
      handleImageDelete={deleteImage}
      handleImageUpload={uploadImage}
    />
  );
};

export { ImageFormWithData }