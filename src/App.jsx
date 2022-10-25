import './style/global.css'
import Logo from './logo.jsx'


function App() {
  

  return (
    <div className="w-screen h-screen justify-center flex flex-col items-center bg-[#262626]">
      <header>
        <nav>
          <Logo/>
          <h1 className='text-[#fef08a] text-2xl font-mono'>Incluir na Tabela</h1>

        </nav>
      </header>
      
      <form action="./BDConection/include.php" method='POST' className="flex flex-col items-center justify-center">
        <div className='w-60 flex flex-col justify-center items-center'>
          <label htmlFor="" className='text-[#fef08a] font-mono text-lg'>CPF</label>
        <input name='cpf' type="number" maxLength={11} className="rounded bg-[#fef08a] text-black p-1 border-2 w-full"/> 

        <label htmlFor="" className='text-[#fef08a] font-mono text-lg'>Nome</label> 
        <input name='name' type="text" className="rounded bg-[#fef08a] text-black p-1 border-2 w-full"/> 

        <label htmlFor="" className='text-[#fef08a] font-mono text-lg'>Sobrenome</label> 
          <input name='lastName' type="text" className="rounded bg-[#fef08a] text-black p-1 border-2 w-full"/> <br /> 
          
          <button type="submit" className='bg-[#fbbf24] rounded w-full p-1'>Enviar</button>
      </div>
     </form>
    </div>
  )
}

export default App
