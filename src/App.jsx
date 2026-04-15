import { Route, Routes } from "react-router-dom"
import Header from "./components/layout/Header"
import DashboardPage from "./pages/DashboardPage"
import DiaryPage from "./pages/DiaryPage"
import CalendarPage from "./pages/CalendarPage"
import SummaryPage from "./pages/SummaryPage"

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage/>}/>
        <Route path="/diary" element={<DiaryPage/>}/>
        <Route path="/calendar" element={<CalendarPage/>}/>
        <Route path="/summary" element={<SummaryPage/>}/>
      </Routes>
    </div>
  )
}

export default App
