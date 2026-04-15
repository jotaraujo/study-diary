import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Study Diary</h1>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/diary">Diary</NavLink>
        <NavLink to="/calendar">Calendar</NavLink>
        <NavLink to="/summary">Summary</NavLink>
      </nav>
    </header>
  )
}

export default Header