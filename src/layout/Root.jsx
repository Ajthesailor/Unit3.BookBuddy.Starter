import { NavLink, Outlet } from 'react-router-dom'


export default function Root(){
  return (
    <>
    <nav>
      <h1>Books</h1>
      <menu>
     <li>
      <NavLink to="/">Home</NavLink>
      </li>
      </menu>
    </nav>
    {}
    <Outlet />
    </>
  )
}