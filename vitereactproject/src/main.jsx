import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp()
{
  return(
    <div>
      <h1>Hello, World !</h1>
    </div>
  )
}

// const reactElement = {
//   type : 'a',
//   props:{
//       href: 'https://www.google.com',
//       target :'_blank'
//   },
//   children:'click me to visit Google'
// }
const anotherElement = (
  <a href= "https://google.com" target='_blank'>visit google</a>
)

const anotherUser = "chai aur code "
const reactElement = React.createElement(
'a',
{href: 'https://google.com',target:'_blank'},
'click me to visit Google',
anotherUser

)


createRoot(document.getElementById('root')).
render(
 
  reactElement

)
