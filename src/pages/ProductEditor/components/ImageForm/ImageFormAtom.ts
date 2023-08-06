import { atom } from "recoil";
import { Image } from "../../types";

const imageAtomKey = "IMAGE_FORM_ATOM";
const imageFormAtom = atom<Image[]>({
    key: imageAtomKey,
    default: [],
  });

  export {imageAtomKey, imageFormAtom}

