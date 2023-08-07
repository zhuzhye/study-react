import styled from "styled-components";
import { primaryColor, secondColor, largeSize } from "./style/variables";
// 1.基本使用
export const AppWrapper = styled.div`
  .footer {
    border: 1px solid red;
  }
`;
// 2.子元素单独抽取到一个样式组件
// 3.可以接受外部传入的props
// 4.可以通过attrs给标签模板字符串中提供属性
// 5.从一个单独的文件中引入
export const SectionWrapper = styled.div.attrs((props) => {
    console.log(props)
    // tColor: props => props.color || 'blue'
    return {
        tColor: props.color || 'blue'
    }
})`
  border: 1px solid #ccc;
  .title {
    font-size: ${props => props.size}px;
    color: ${props => props.tColor};
    &:hover {
      background-color: ${secondColor};
    }
  }
  .content {
    font-size:${largeSize}px;
    color: ${primaryColor};
  }
`;
