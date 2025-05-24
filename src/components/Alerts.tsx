import { useAppContext } from '../context/AppContext';

export default function Alerts() {
  const { gastos, presupuesto } = useAppContext();
  const total = gastos.reduce((acc, g) => acc + g.monto, 0);
  const porcentaje = (total / presupuesto) * 100;

  if (porcentaje >= 100) {
    return <div style={{ color: 'red' }}>Has superado el límite del presupuesto, debes ajustar gastos</div>;
  } else if (porcentaje >= 80) {
    return <div style={{ color: 'orange' }}>Has alcanzado un {porcentaje.toFixed(0)}% del presupuesto</div>;
  }

  return null;
}
