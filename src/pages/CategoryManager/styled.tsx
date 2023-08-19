import styled from "styled-components";
import List from "@mui/material/List";

const CategoryManagerWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

const CategoryList = styled(List)`
  width: 50%;
`;

const CategoryActions = styled.div`
  width: 50%;
  display: flex;
  flex-direction: row;
`;

const StyledTextContainer = styled.div`
  width: 300px;
`;

export {
  CategoryManagerWrapper,
  CategoryList,
  CategoryActions,
  StyledTextContainer,
};
