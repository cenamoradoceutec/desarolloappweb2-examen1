import React, { createContext, useState, useContext, useEffect } from 'react';

export type Gasto = {
  categoria: string;
  monto: number;
  fecha: string;
};

type AppContextType = {
  presupuesto: number;
  setPresupuesto: (monto: number) => void;
  gastos: Gasto[];
  agregarGasto: (gasto: Gasto) => void;
  cargarGastos: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [presupuesto, setPresupuesto] = useState(0);
  const [gastos, setGastos] = useState<Gasto[]>([]);

  const cargarGastos = async () => {
    const res = await fetch('http://localhost:5000/gasto');
    const data = await res.json();
    setGastos(data);
  };

  const agregarGasto = async (gasto: Gasto) => {
    await fetch('http://localhost:5000/gasto', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(gasto),
    });
    cargarGastos();
  };

  useEffect(() => {
    cargarGastos();
  }, []);

  return (
    <AppContext.Provider value={{ presupuesto, setPresupuesto, gastos, agregarGasto, cargarGastos }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within AppProvider');
  return context;
};
