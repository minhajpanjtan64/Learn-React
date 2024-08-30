import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  // const [count, setCount] = useState(0)
  // let myObj = {
  //   username : "hitesh",
  //   age:21

  // }
  //  let NewArray = [1,2,3,4,5];

  return (
    <div className='w-96'>
    <h1 className='bg-green-400 text-white p-4 rounded-xl mb-4'>tailwind test</h1>
     
{/* <figure className='ded-xl p-8 dark:bg-slate-800'>
  <img className="w-24 h-24 rounded-full object-cover mx-auto" src="https://images.pexels.com/photos/18264705/pexels-photo-18264705/free-photo-of-smiling-man-in-headphones-with-microphone-using-a-apple-macbook.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
  <div className="pt-6 space-y-4" >
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
  <Card username="chaiaurcode" btnText="click me"  />
  <Card  username ="chaiaurreact" />

    </div>
  )
}

export default App
