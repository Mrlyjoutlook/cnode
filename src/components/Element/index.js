import styled, { css } from 'styled-components';

const fontSize = (n1, n2, n3) => css`
  & {
    font-size: ${n1}px;
  }
  [data-dpr="2"] & { 
    font-size: ${n2}px; 
  }
  [data-dpr="3"] & { 
    font-size: ${n3}px; 
  }
`;

const Page = styled.div`
  /*
  position: fixed;
  height: 100%;
  width: 100%;
  */
  height: 100vh;
  width: 100vw;
`;

export const HomePage = styled(Page)`
  background: #e8e8e8;
`;

export const LoginPage = styled(Page)`
  background: #e8e8e8;
`;

export const NotFoundPage = styled(Page)`
  background: #e8e8e8;
  text-align: center;
`;

export const Nav = styled.section`
  width: 100%;
  height: 1.28rem;
  justify-content: space-around;
  background: #00bcd4;
  z-index: 1000;
`.extend`${fontSize(12, 24, 36)}`;

export const Button = styled.div`
  border: 1px solid #8a8989;
  border-radius: .3rem;
  width: 5rem;
  margin: 0 auto;
  line-height: 1rem;
  font-size: 20px;
  color: #8a8989;
`;

export const ListContainer = styled.div`
  width: 9.4rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  padding: .3rem .5rem;
  background: #fff;
  border-radius: .25rem;
`;

export const CardTop = styled.div`
  &:after{
    content: '';
    width: 100%;
    height: 2px;
    background-color: #ccc;
    display: block;
    [data-dpr="2"] & {
      transform: scaleY(.5);
    }
    [data-dpr="3"] & {
      transform: scaleY(.33);
    }
`;

export const CardLabel = styled.div`
  display: inline-block;
  padding: .06rem .2rem;
  border-radius: .1rem;
  margin-right: .2rem;
  color: #fff;
  ${props => props.color ? css`background: ${props.color};` : 'background: #41a7e2;'}
`.extend`${fontSize(8, 16, 24)}`;

export const CardTitle = styled.div`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-weight: bold;
  text-align: center;
  padding: .14rem 0;
`.extend`${fontSize(18, 36, 54)}`;

export const CardBottom = styled.div`
  padding: .14rem 0 0 0;
`;

export const CardAvatar = styled.div`
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 100px;
  display: inline-block;
  ${props => `background: url(${props.src})  center center;`}
`;

export const CardName = styled.div`
  display: inline-block;
  vertical-align: top;
  font-weight: 400;
  margin: .1rem;
`.extend`${fontSize(16, 32, 48)}`;

export const CardTime = styled.div`
  font-weight: 400;
  margin: .1rem;
`.extend`${fontSize(10, 20, 30)}`;

export const CardPop = styled.div`
  display: inline-block;
  font-weight: 400;
  margin: .1rem;
`.extend`${fontSize(10, 20, 30)}`;
