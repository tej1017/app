import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GameBoard from "@/components/GameBoard";
import { Toaster } from "@/components/ui/sonner";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<GameBoard />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
