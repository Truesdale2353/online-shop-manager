import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { StyledDescriptionEditor } from "./StyledDescriptionEditor";
import { useState } from "react";

interface DescriptionEditorProps {
  onChange?: Function;
  value?: string;
}
const DescriptionEditor = ({
  onChange = () => {},
  value = "",
}: DescriptionEditorProps) => {
  const [initalValue, setValue] = useState(value);
  const handleChange = (e: string) => {
    onChange(e);
    setValue(e);
  };
  return (
    <StyledDescriptionEditor>
      <ReactQuill
        theme="snow"
        value={initalValue}
        onChange={(e) => handleChange(e)}
      ></ReactQuill>
    </StyledDescriptionEditor>
  );
};

export { DescriptionEditor };
