import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [cidade, setCidade] = useState('');
 const [clima, setClima] = useState(null);
 const [carregando, setCarregando] = useState(false);
 const [erro, setErro] = useState('');

//Função para buscar dados do clima
const buscaClima = async () => {
  //Validação básica
  if(!cidade.trim()){
    setErro('Por favor, digite uma cidade');
    return;
  }
setCarregando(true);
setErro('');

try(
   
} catch (error){

}finally (
  
)

  return (
    <>
      
    </>
  )
}

export default App
