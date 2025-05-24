import { useAppContext } from '../context/AppContext';
import { useState } from 'react';
import ExpenseTable from '../components/ExpenseTable';
import Alerts from '../components/Alerts';

export default function Presupuesto() {
  const { setPresupuesto, presupuesto, gastos } = useAppContext();
  const [monto, setMonto] = useState('');

  const handleSubmit = () => {
    setPresupuesto(Number(monto));
  };

  return (
    <div>
      <h1>Presupuesto Mensual</h1>
      <input type="number" placeholder="Monto del presupuesto" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <button onClick={handleSubmit}>Guardar Presupuesto</button>

      <Alerts />
      <ExpenseTable />
    </div>
  );
}
