import { useEffect, useState } from 'react';
import './App.css'
import Card from './components/Card/Card'

function App() {
  // const [items, setItems] = useState();
  const [algo, setAlgo] = useState([]);

  useEffect(() => {
    fetch('data.json')
      .then(res => res.json())
      .then(data => {
        setAlgo(data)
        console.log(data);
      })
  }, [])
  return (
    <div className='max-w-6xl flex flex-col justify-center mt-10 mx-auto'>
      <h3 className='text-3xl font-bold uppercase mb-5'>Image Compression</h3>

      <div className='grid grid-cols-3 gap-5 mx-auto'>
        {
          algo.map(item => <Card key={item.id} item={item}></Card>)
        }
      </div>
    </div>


  )
}

export default App
