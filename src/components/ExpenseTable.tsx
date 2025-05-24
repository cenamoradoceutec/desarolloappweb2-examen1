import { useAppContext } from '../context/AppContext';

export default function ExpenseTable() {
  const { gastos } = useAppContext();

  return (
    <table>
      <thead>
        <tr>
          <th>Categoría</th>
          <th>Monto</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {gastos.map((g, i) => (
          <tr key={i}>
            <td>{g.categoria}</td>
            <td>{g.monto}</td>
            <td>{g.fecha}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
