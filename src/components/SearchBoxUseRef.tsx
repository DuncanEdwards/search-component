import { StyledButton, StyledDiv, StyledLabel } from "./SearchBox.styled";
import { SearchBoxUncontrolledProps } from "./SearchBoxUncontrolled";

export const SearchBoxUseRef = ({
  initialSearch,
  onChange,
}: SearchBoxUncontrolledProps) => {
  console.log("implement me!", { initialSearch, onChange });

  return (
    <StyledDiv>
      <StyledLabel>Search:</StyledLabel>
      <input id="search" type="text" />
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
};
