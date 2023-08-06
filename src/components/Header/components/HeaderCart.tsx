import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledShoppingCardContainer } from "./StyledShoppingCardContainer";

interface HeaderCartProps {
  onMouseOver?: Function;
  onMouseOut?: Function;
}
const HeaderCart = ({
  onMouseOver = () => {},
  onMouseOut = () => {},
}: HeaderCartProps) => {
  return (
    <StyledShoppingCardContainer onMouseOver={() => onMouseOver()} onMouseOut={() => onMouseOut()} style={{}}>
      <ShoppingCartIcon style={{ color: "white" }} />
    </StyledShoppingCardContainer>
  );
};
export { HeaderCart };
