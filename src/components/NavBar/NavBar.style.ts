import styled from 'styled-components';
import colors from '../../style/colors';

export const Nav = styled.nav`
  display: flex;
  background-color: ${colors.primary};
  color: ${colors.white};
  font-weight: 600;
  font-size: 1.5rem;

  ul {
    display: flex;
    justify-content: center;
    gap: 8rem;
    width: 100%;
    padding: 2rem;
  }

  li:hover {
    color: ${colors.hover}
  }
`;