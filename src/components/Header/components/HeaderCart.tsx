import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { StyledShoppingCardContainer } from "./StyledShoppingCardContainer";

interface HeaderCartProps {
  onMouseOver?: Function;
  onMouseOut?: Function;
  onClick?: Function;
}
const HeaderCart = ({
  onMouseOver = () => {},
  onMouseOut = () => {},
  onClick = () => {},
}: HeaderCartProps) => {
  return (
    <StyledShoppingCardContainer
      onMouseOver={() => onMouseOver()}
      onMouseOut={() => onMouseOut()}
      onClick={() => onClick()}
    >
      <ShoppingCartIcon style={{ color: "white" }} />
    </StyledShoppingCardContainer>
  );
};
export { HeaderCart };
