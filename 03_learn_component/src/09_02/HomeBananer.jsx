import ThemeContext from "./context/theme-context";

function HomeBananer() {
  return (
    <div>
      {/*函数式组件中使用Context共享数据 */}
      <ThemeContext.Consumer>
        {(value) => {
          return <h2>{value.color}</h2>;
        }}
      </ThemeContext.Consumer>
    </div>
  );
}
export default HomeBananer;
