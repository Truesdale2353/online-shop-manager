import { Image } from "../types";
import { useRecoilState } from "recoil";
import { imageFormAtom } from "../components/ImageForm/ImageFormAtom";

const useImageGallery = ():[Image[], Function, Function] => {

  const [images, setImages] = useRecoilState<Image[]>(imageFormAtom);
  const uploadImage = (files: FileList | null) => {
    if (files) {
      const newImages: Image[] = [];
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        newImages.push({ file });
      }
      setImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  const deleteImage = (index: number) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };
  return [images, uploadImage, deleteImage];
};

export { useImageGallery }
