import './App.css'
import { Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className=' bg-gray-950 w-full overflow-hidden text-gray-200 relative'>
      <div 
        className='fixed pointer-events-none z-0 rounded-full opacity-40'
        style={{
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.3) 40%, rgba(255,255,255,0) 100%)',
          left: `${mousePos.x - 200}px`,
          top: `${mousePos.y - 200}px`,
          filter: 'blur(100px)',
          transition: 'left 0.8s cubic-bezier(0.15, 0.83, 0.66, 1), top 0.8s cubic-bezier(0.15, 0.83, 0.66, 1)',
          boxShadow: '0 0 100px rgba(255, 255, 255, 0.6)'
        }}
      />
      <Outlet />
    </div>
  )
}

export default App
