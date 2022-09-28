// import './style.css'
// import javascriptLogo from './javascript.svg'
import { setupCounter } from '#/counter.js'

{/* <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" /> */}
document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="public/webpack.svg" class="logo" alt="Webpack logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
    </a>
    <h1>Hello Webpack!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Webpack logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
