import styled from 'styled-components';

const Sidebar = styled.div`
  height: 100vh;
  width: 20%;

  @media (max-width: 700px) {
    width: 10%;
  }

  @media (max-width: 500px) {
    display: none;
  }
`;

export default Sidebar;
