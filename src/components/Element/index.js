import styled, { css, keyframes } from 'styled-components';

/**
|--------------------------------------------------
| animate
|--------------------------------------------------
*/

const fadeInDown = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: none;
  }
`;

const fadeOutUp = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`;

/**
|--------------------------------------------------
| base样式继承
|--------------------------------------------------
*/

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

/**
|--------------------------------------------------
| 页面层
|--------------------------------------------------
*/

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
  background: #00bcd4;
`;

export const TopicPage = styled(Page)`
  background: #fff;
`;

export const NotFoundPage = styled(Page)`
  background: #e8e8e8;
  text-align: center;
`;

export const Nav = styled.section`
  position: fixed;
  width: 100%;
  height: 1.28rem;
  justify-content: space-around;
  background: #00bcd4;
  z-index: 1000;
`.extend`${fontSize(12, 24, 36)}`;

export const ListContainer = styled.div`
  width: 9.4rem;
  margin: 0 auto;
`;

export const Card = styled.div`
  padding: .14rem .5rem;
  background: #fff;
  border-radius: .25rem;
  margin-bottom: .2rem;
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
  padding: .4rem 0;
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

export const InputLabel = styled.div`

`;

/**
|--------------------------------------------------
| form
|--------------------------------------------------
*/

export const Input = styled.input`
  -webkit-appearance: textfield;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  width: 70%;
  height: 1.2rem;
  border: 2px solid #fff;
  border-radius: .2rem;
  margin-left: 50%;
  outline: none;
  transform: translate(-50%, 2rem);
  background-color: rgba(0, 0, 0, 0);
  color: #fff;
  position: relative;
  padding-left: .04rem;
  box-sizing: border-box;
  &:focus{
    border: 2px solid #07d6f1;
    &::-webkit-input-placeholder{
      color: #07d6f1;
    }
  }
  &::-webkit-input-placeholder{
    color: #fff;
  }
`.extend`${fontSize(15, 30, 45)}`;

// export const RadioStyle = styled.label`
//   background-color:#fff;
//   border:1px solid rgba(0,0,0,0.15);
//   border-radius:100%;
//   display:inline-block;
//   height:16px;
//   margin-right:10px;
//   margin-top:-1px;
//   vertical-align:middle;
//   width:16px;
//   line-height:1;
//   ${Radio}:checked &:after {
//     background-color:#57ad68;
//     border-radius:100%;
//     content:"";
//     display:inline-block;
//     height:12px;
//     margin:2px;
//     width:12px;
//   }
// `;

// export const Radio = styled.div.attrs({
//   type: 'radio',
// })`
//   display:none;
// `;

/**
|--------------------------------------------------
| 按钮
|--------------------------------------------------
*/

export const Button = styled.div`
  border: 2px solid #fff;
  border-radius: .2rem;
  width: 70%;
  margin-left: 50%;
  transform: translate(-50%, 2.4rem);
  height: 1.2rem;
  color: #fff;
`.extend`${fontSize(15, 30, 45)}`;


export const Submit = styled.div`
  border-radius: .2rem;
  width: 20%;
  margin-top: .2rem;
  height: 1rem;
  line-height: 1rem;
  olor: #fff;
  background: #00bcd4;
  color: #fff;
`.extend`${fontSize(15, 30, 45)}`;

/**
|--------------------------------------------------
| other
|--------------------------------------------------
*/

export const Barrier = styled.div`
  display: ${ props => props.show ? 'block' : 'none'};
  background: #000;
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 100;
  opacity: .4;
`;

export const AnimBlok = styled.div`
  display: ${ props => props.show ? 'block' : 'none'};
  animation: ${ props => props.show ? fadeInDown : fadeOutUp} 1s linear;
  position: fixed;
  top: 1.28rem;
  background: #fff;
  z-index: 200;
  width: 10rem;
  height: 5.6rem;
  text-align: center;
  div:first-child {
    text-align: left;
    margin: .2rem .5rem;
  }
  textarea{
    margin: 0;
    border: 2px solid #ccc;
    width: 9rem;
    border-radius: .2rem;
    height: 3rem;
    outline: none;
  }
`.extend`${fontSize(15, 30, 45)}`;
