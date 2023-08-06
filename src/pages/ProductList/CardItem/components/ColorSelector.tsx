import { ColorBox } from "./ColorBox";
interface ColorSelectorProps {
  setColor: Function;
  colors: Array<string>;
}
const ColorSelector = ({ setColor, colors }: ColorSelectorProps) => {
  return colors.map((color, index) => {
    return (
      <div onClick={()=>setColor(index)} key={color}>
        <ColorBox color={color}></ColorBox>
      </div>
    );
  });
};

export { ColorSelector };
