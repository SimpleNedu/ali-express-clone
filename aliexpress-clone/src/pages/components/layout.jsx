function Layout({children}) {
  return (
  <section>
    {/* here goes the nav and all other header i common for pages with this layout */}

    {/* you can lift the box container up to this point to save you time that would be invested in rewritiing and resizing the boxb */}
    {children}
  </section>
  )
}

export default Layout