import React from 'react'
// A component is a fucntion that ALWAYS returns a JSX. 

const NavBar = () => {
  return (
    <div>
        <h2><i className="fa-solid fa-store"></i>My Super Store</h2>
    </div>
  )
}
// In order to work with this component, we need to export the component, so other components can import them and use them.
export default NavBar;