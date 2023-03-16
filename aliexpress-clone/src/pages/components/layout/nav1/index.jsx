import Account from "./account"
import Languagge from "./languagge"
import Nav from "./nav"

const Nav1 = () => {
  return (
    <nav className={`list-none`}>
        <Nav/>
        <Languagge/>
        <Account/>
    </nav>
  )
}

export default Nav1