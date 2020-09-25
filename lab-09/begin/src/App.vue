<template>
  <div
    class="notice"
  >Your browser doesn't support CSS Grid Layout. Unfortunately, you won't be able to see the examples.</div>
  <div class="container">
    <header>
      <a href="/">
        <img src="@/assets/logo.png" width="50" alt="GridLayout.io" />
      </a>
      <h1>Holy Grail Layout with CSS Grid</h1>
    </header>

    <nav>
      Navigation
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </nav>

    <main>
      Main content
      <router-view />
    </main>

    <aside>Sidebar / Ads</aside>

    <footer>
      <p>© 2016 GridLayout.io</p>
    </footer>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

:root {
  --primary: white;
  --secondary: HSL(225, 6%, 51%);
  --base: #282F44;
  --base2: HSL(225, 6%, 21%);
  --text-color: HSL(225, 6%, 21%);
  --link-color: #093341;
}

html {
    font-size: 1em;
    line-height: 1.5;
    height: 100%;
}

body {
  color: var(--text-color);
  font-size: 17px;
}

body, h1, h2 {
  font-family: Montserrat, sans-serif;
  margin: 0;
  padding: 0;
}

.wf-active h1, .wf-active h2 {
   opacity: 1;
   transition: opacity .1s
}

h1 {
  color: var(--primary);
  font-size: 1.3rem;
}


@supports(display: grid) {
  .notice {
    display: none;
  }
}

h2 {
  color: var(--primary);
  font-size: 1.1rem;
}

a, a:link    { color: var(--link-color) }
/*a:visited { color: rgba(255,255,255,0.3) }*/

.hidden {
    display: none !important;
}
.text-center, footer, header {
  text-align: center;
}


.container {
  display: grid;
  grid-template-areas:
    "header header header"
    "nav content side"
    "footer footer footer";
  height: 100vh;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-gap: 10px;
}

header {
  background: #F4991A;
  grid-area: header;
  padding: 1rem 0;

  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav, aside {
  background: #F2EAD3;
}

nav, aside, main {
  text-transform: uppercase;
  color: lightslategray;
  display: flex;
  align-items: center;
  justify-content: center;
}

nav {
  grid-area: nav;
  margin-left: 0.5rem;
}

main {
  grid-area: content;
  width: 100%;
  background: #F9F5F0;
}

aside {
  grid-area: side;
  margin-right: 0.5rem;
}

footer {
  background: #321313;
  grid-area: footer;
  color: var(--primary);
}

@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "nav"
      "content"
      "side"
      "footer";
    grid-template-columns: 1fr;
    grid-template-rows: auto minmax(75px, auto) 1fr minmax(75px, auto) auto;
  }
  nav, aside {
    margin: 0;
  }
}

</style>
