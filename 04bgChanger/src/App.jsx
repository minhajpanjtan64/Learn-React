import { useState } from "react"

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className="w-full h-screen"
    style= {{
      backgroundColor: color,
    }}
    >
     <div className="fixed top-12 left-0 right-0 flex justify-center px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white shadow-lg py-2 px-3 rounded-2xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
          style={{
            backgroundColor: "red",
          }}>Red</button>

          <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "green",
          }}>Green</button>

          <button onClick={() => setColor("blue")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "blue",
          }}>Blue</button>

          <button onClick={() => setColor("olive")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "olive",
          }}>Olive</button>

          <button onClick={() => setColor("grey")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "grey",
          }}>Grey</button>

          <button onClick={() => setColor("yellow")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "yellow",
          }}>Yellow</button>

          <button onClick={() => setColor("pink")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "pink",
          }}>Pink</button>

          <button onClick={() => setColor("purple")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "purple",
          }}>Purple</button>

          <button onClick={() => setColor("white")} className="outline-none px-4 py-1 rounded-full text-black  shadow-lg"
          style={{
            backgroundColor: "white",
          }}>white</button>
        </div>
     </div>
     
    </div>
  )
}

export default App
