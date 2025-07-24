import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/StartPage/StartPage';
import { NoPage } from './Components/NoPage/NoPage';
import { EmpireMarahPage } from './Components/EmpireMarah/EmpireMarahPage';
import { AngalsWastelandPage } from './Components/AngalsWastelands/AngalsWastelandPage';
import { HistoryEmpireMarah } from './Components/EmpireMarah/History/HistoryEmpireMarah';
import { HistoryAngalsWasteland } from './Components/AngalsWastelands/History/HistoryAngalsWasteland';
import { StructureEmpireMarah } from './Components/EmpireMarah/Structure/StructureEmpireMarah';
import { StructureAngalsWasteland } from './Components/AngalsWastelands/Structure/StructureAngalsWasteland';
import { GameEmpire } from './Components/EmpireMarah/Game/GameEmpire';
import { GameWasteland } from './Components/AngalsWastelands/Game/GameWasteland';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="/empire" element={<EmpireMarahPage/>}/>
      <Route path="wasteland" element={<AngalsWastelandPage/>}/>
      <Route path="historyemp" element={<HistoryEmpireMarah/>}/>
      <Route path="historywas" element={<HistoryAngalsWasteland/>}/>
      <Route path="structureemp" element={<StructureEmpireMarah/>}/>
      <Route path="structurewas" element={<StructureAngalsWasteland/>}/>
      <Route path="gameemp" element={<GameEmpire/>}/>
      <Route path="gamewas" element={<GameWasteland/>}/>
      <Route path="*" element={<NoPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
