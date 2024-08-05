import { Route, Routes } from "react-router-dom"
import { PageLayout } from "./components/common/pageLayout"
import { Course, Main } from "./pages"

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bridgem/course" element={<Course />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </PageLayout>
  )
}

export default App