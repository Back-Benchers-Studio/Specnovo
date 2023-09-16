/*
Udemy course: https://www.udemy.com/course/react-three-fiber-configurator
*/

import { createRoot } from 'react-dom/client'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
createRoot(document.getElementById('root')).render(
  <>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </>
)
