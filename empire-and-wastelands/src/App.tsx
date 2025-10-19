import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { StartPage } from './Components/StartPage/StartPage';
import { NoPage } from './Components/NoPage/NoPage';
import { EmpireMarahPage } from './Components/EmpireMarah/EmpireMarahPage';
import { AngalsWastelandPage } from './Components/AngalsWastelands/AngalsWastelandPage';
import { HistoryEmpireMarah } from './Components/EmpireMarah/History/HistoryEmpireMarah';
import { HistoryAngalsWasteland } from './Components/AngalsWastelands/History/HistoryAngalsWasteland';
import { StructureEmpireMarah } from './Components/EmpireMarah/Structure/StructureEmpireMarah';
import { StructureAngalsWasteland } from './Components/AngalsWastelands/Structure/StructureAngalsWasteland';
import { GameWastelandLvl1 } from './Components/AngalsWastelands/Game/GameWastelandLvl1';
import { GameWastelandLvl2 } from './Components/AngalsWastelands/Game/GameWastelandLvl2';
import { GameWastelandLvl3 } from './Components/AngalsWastelands/Game/GameWastelandLvl3';
import { GameWastelandLvl4 } from './Components/AngalsWastelands/Game/GameWastelandLvl4';
import { GameEmpireLvl1 } from './Components/EmpireMarah/Game/GameEmpireLvl1';
import { GameEmpireLvl2 } from './Components/EmpireMarah/Game/GameEmpireLvl2';
import { GameEmpireLvl3 } from './Components/EmpireMarah/Game/GameEmpireLvl3';
import { GameEmpireLvl4 } from './Components/EmpireMarah/Game/GameEmpireLvl4';
import { TransitionPage } from './Components/TransitionPage/TransitionPage';


function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage/>}/>
      <Route path="empire" element={<EmpireMarahPage/>}/>
      <Route path="wasteland" element={<AngalsWastelandPage/>}/>
      <Route path="historyemp" element={<HistoryEmpireMarah/>}/>
      <Route path="historywas" element={<HistoryAngalsWasteland/>}/>
      <Route path="structureemp" element={<StructureEmpireMarah/>}/>
      <Route path="structurewas" element={<StructureAngalsWasteland/>}/>
      <Route path="gameemplvl1" element={<GameEmpireLvl1/>}/>
      <Route path="gameemplvl2" element={<GameEmpireLvl2/>}/>
      <Route path="gameemplvl3" element={<GameEmpireLvl3/>}/>
      <Route path="gameemplvl4" element={<GameEmpireLvl4/>}/>
      <Route path="gamewaslvl1" element={<GameWastelandLvl1/>}/>
      <Route path="gamewaslvl2" element={<GameWastelandLvl2/>}/>
      <Route path="gamewaslvl3" element={<GameWastelandLvl3/>}/>
      <Route path="gamewaslvl4" element={<GameWastelandLvl4/>}/>
      <Route path="*" element={<NoPage/>}/>
      <Route path="transition" element={<TransitionPage/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
