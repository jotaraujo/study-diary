import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <header>
      <h1>Study Diary</h1>
      <nav>
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/diary">Diário</NavLink>
        <NavLink to="/calendar">Calendário</NavLink>
        <NavLink to="/summary">Resumo</NavLink>
      </nav>
    </header>
  )
}

export default Header