import { useState } from 'react';
import { useAppContext } from '../context/AppContext';

export default function Registro() {
  const { agregarGasto } = useAppContext();
  const [monto, setMonto] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fecha, setFecha] = useState('');

  const handleSubmit = () => {
    agregarGasto({ monto: Number(monto), categoria, fecha });
    setMonto('');
    setCategoria('');
    setFecha('');
  };

  return (
    <div>
      <h1>Registrar Gasto</h1>
      <input placeholder="Monto" type="number" value={monto} onChange={(e) => setMonto(e.target.value)} />
      <input placeholder="Categoría" value={categoria} onChange={(e) => setCategoria(e.target.value)} />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <button onClick={handleSubmit}>Guardar Gasto</button>
    </div>
  );
}
