import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [contrasena, setContrasena] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (usuario === 'admin' && contrasena === 'admin123') {
      router.push('/presupuesto');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  return (
    <div>
      <h1>Iniciar Sesión</h1>
      <input placeholder="Usuario" onChange={(e) => setUsuario(e.target.value)} />
      <input placeholder="Contraseña" type="password" onChange={(e) => setContrasena(e.target.value)} />
      <button onClick={handleLogin}>Ingresar</button>
    </div>
  );
}
