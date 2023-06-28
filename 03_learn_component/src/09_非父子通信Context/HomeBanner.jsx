import ThemeContext from "./context/theme-context"
function HomeBananer() {

  return <div>
    <span>HomeBananer</span>
    {/*  */}
    <ThemeContext.Consumer>
      {
        value => {
          return <h2>{value.color}</h2>
        }
      }
    </ThemeContext.Consumer>
  </div>
}
export default HomeBananer