import styled from 'styled-components'

export const MenuContainer = styled.aside`
  width: 72px;
  height: 100vh;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  flex-direction: column;

  background-color: #fff;

  a img {
    width: 24px;
  }

  li {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;

    position: relative;

    .active {
      &::before {
        content: '';
        display: block;
        width: 3px;
        height: 38px;
        background-color: #ff6d00;
        border-radius: 4px;

        position: absolute;
        left: 0;
        top: 11px;
      }
    }
  }
`
export const MenuLogo = styled.div`
  height: 72px;
  background-color: #ff6d00;

  display: flex;
  justify-content: center;
  align-items: center;
`
