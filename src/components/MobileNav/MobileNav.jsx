import styled from "styled-components";
import { RiMenuFill, RiMenuFoldFill } from "react-icons/ri";
import PropTypes from 'prop-types';

const MobileNavStyle = styled.div`
  display: none;
  @media screen and (max-width: 992px) {
    width: 200px;
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    height: 80px;
    display: flex;
    box-sizing: border-box;
    align-items: center;
  }
`;

const RiMenuFillStyle = styled(RiMenuFill)`
  color: white;
  font-size: 1.375rem;
  margin-left: 2rem;
  cursor: pointer;
`;

const ContainerRiMenuFoldFill = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem;
  width: 100%;
  height: 80px;
  justify-content: end;
  background-color: #115;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.65);
  transition: 2s all ease;
`;
const RiMenuFoldFillStyle = styled(RiMenuFoldFill)`
  color: white;
  font-size: 1.375rem;
  cursor: pointer;
`;

const MobileNav = ({showMenu, showMenuFunc}) => {
  return (
    <MobileNavStyle>
      {!showMenu ? (
        <RiMenuFillStyle
          onClick={() => showMenuFunc(!showMenu)}
        ></RiMenuFillStyle>
      ) : (
        <ContainerRiMenuFoldFill>
          <RiMenuFoldFillStyle
            onClick={() => showMenuFunc(!showMenu)}
          ></RiMenuFoldFillStyle>
        </ContainerRiMenuFoldFill>
      )}
    </MobileNavStyle>
  );
};


MobileNav.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  showMenuFunc: PropTypes.func.isRequired,
};

export default MobileNav;
