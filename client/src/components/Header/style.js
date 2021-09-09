import styled from "styled-components";

export const Header = styled.header`
  background: white;
  display: flex;
  align-items: center;
  padding: 0.6rem 1rem;
  justify-content: space-between;
  height: 9vh;
  position: fixed;
  width: 100%;
`;
export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
`;
export const HeaderWrapperSide = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
  justify-content: space-between;
`;

export const Logo = styled.div`
  display: flex;
  width: 6rem;
`;

export const LogoLink = styled.a`
  width: 100%;
  display: flex;
`;

// this to Typography
export const HeadingPrimary = styled.h1`
  font-size: 1rem;
  font-weight: 500;
`;

export const HeaderCommunity = styled.div`
  border: 1px solid transparent;
  border-radius: 4px;
  box-sizing: border-box;
  height: 36px;
  position: relative;
  width: 245px;
`;

export const CommunityBtn = styled.button`
  width: inherit;
  display: flex;
  align-items: center;
  height: inherit;
  justify-content: space-between;
  background: transparent;
  border: none;
  padding: 0 0.4rem;
  border-radius: 3px;
  cursor: pointer;
`;

export const IconHome = styled.i`
  padding-right: 5px;
`;
// .header-wrapper .community:hover {
//     border: 1px solid #eee;
// }

// .header-wrapper svg._1bWuGs_1sq4Pqy099x_yy- {
//     width: 10rem;
// }

// .header-wrapper svg._1O4jTk-dZ-VIxsCuYB6OR8 {
//     width: 6rem;
//     margin-right: .5rem;
// }

// .search {
//     background: #eaeaea7a;
//     display: flex;
//     align-items: center;
//     height: 36px;
//     padding-left: .8rem;
//     border-radius: 3px;
//     border: 1px solid rgba(238, 238, 238, 0.973);
//     width: 15rem;

// }

// .search i.fas.fa-search {
//     font-size: 1.2rem;
//     font-weight: 100;
// }

// .search input {
//     border: none;
//     background: transparent;
//     height: inherit;
//     outline: none;
//     padding-left: .35rem;
// }

// nav ul li a i {
//     color: #0e0e0eba;
//     font-size: 1.2rem;
// }

// button.btn.btn-primary {
//     background: linear-gradient(180deg, hsla(0, 0%, 100%, .1) 45.96%, hsla(0, 0%, 100%, .57) 46%, hsla(0, 0%, 100%, 0) 130%), #ffe10d;
//     border: none;
//     box-shadow: 0 2px 0 #eed000;
//     color: #1c1c1c;
//     width: 9rem;
//     height: 2rem;
//     border-radius: 5rem;
// }

// a.user-details {
//     background: transparent;
//     border: none;
//     display: flex;
//     cursor: pointer;
//     align-items: center;
//     width: 25rem;
//     padding: 1rem;
// }

// .header-wrapper-right .user-details .avater {
//     width: 2rem;
// }

// .avater img {
//     border-radius: .5rem;
// }

// .header-wrapper-right div,
// .header-wrapper-right nav {
//     width: 30%
// }

// .header-wrapper-right .account-details {
//     display: flex;
//     align-items: center;
//     width: 50%
// }

// .header-wrapper-right nav {
//     padding: 0 1rem;
// }

// .header-wrapper-right nav ul {
//     display: flex;
//     justify-content: space-around;
// }
