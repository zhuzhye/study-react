import styled from "styled-components";
const HYButton = styled.button`
  border: 1px solid purple;
  border-radius: 5px;
`;
// 样式继承
export const HYButtonWrapper = styled(HYButton)`
  background-color: #0f0;
  color: #fff;;
`;

export const HomeWrapper = styled.div`
  .top {
    .bananer {
      color: red;
    }
  }
  .bottom {
    color: ${(props) => props.theme.color};
    font-size: ${(props) => props.theme.size}px;
  }
  .product-list {
    .item {
      color: blue;
    }
  }
`;
