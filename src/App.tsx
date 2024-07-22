import { Route, Routes } from "react-router-dom"
import { PageLayout } from "./components/common/pageLayout"
import { Main } from "./pages"

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Main />} />
      </Routes>
    </PageLayout>
  )
}

export default App