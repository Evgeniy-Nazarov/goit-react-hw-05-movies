import { Link } from 'react-router-dom';
import styled from 'styled-components';



const Styledink = styled(Link)`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  text-decoration: none;
  color: black;
  font-size: 1.2rem;
  &:hover {
    color: red;
  }
`;

export default Styledink;