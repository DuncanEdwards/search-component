import { StyledButton, StyledDiv, StyledLabel } from "./SearchBox.styled";
import { SearchBoxUncontrolledProps } from "./SearchBoxUncontrolled";

export const SearchBoxUseRef = ({
  initialSearch,
  onSearch,
}: SearchBoxUncontrolledProps) => {
  console.log("implement me!", { initialSearch, onSearch });

  return (
    <StyledDiv>
      <StyledLabel>Search:</StyledLabel>
      <input id="search" type="text" />
      <StyledButton type="submit">Search</StyledButton>
    </StyledDiv>
  );
};
