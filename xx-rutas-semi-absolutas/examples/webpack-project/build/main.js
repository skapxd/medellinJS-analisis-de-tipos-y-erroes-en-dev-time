(()=>{"use strict";document.querySelector("#app").innerHTML='\n  <div>\n    <a href="https://vitejs.dev" target="_blank">\n      <img src="public/webpack.svg" class="logo" alt="Webpack logo" />\n    </a>\n    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">\n    </a>\n    <h1>Hello Webpack!</h1>\n    <div class="card">\n      <button id="counter" type="button"></button>\n    </div>\n    <p class="read-the-docs">\n      Click on the Vite logo to learn more\n    </p>\n  </div>\n',function(e){let n=0;const t=t=>{n=t,e.innerHTML=`count is ${n}`};e.addEventListener("click",(()=>t(++n))),t(0)}(document.querySelector("#counter"))})();