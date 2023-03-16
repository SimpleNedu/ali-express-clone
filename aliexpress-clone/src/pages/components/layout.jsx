import Nav1 from "./layout/nav1"

function Layout({children}) {
  return (
  <section>
    <Nav1/>

    {/* you can lift the box container up to this point to save you time that would be invested in rewritiing and resizing the boxb */}
    {children}
  </section>
  )
}

export default Layout