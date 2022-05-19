<template>
  <header absolute z-40 w-full flex justify-between items-center>
    <div m3>Allen's Blog</div>
    <nav flex items-center m3 op70>
      <a
        mr3
        href="https://juejin.cn/user/1918010476469400"
        target="_blank"
        title="掘金"
        lt-md:hidden
      >
        掘金
      </a>
      <a mr3 href="https://github.com/Allen-1998" target="_blank" title="GitHub" lt-md:hidden>
        <div i-uil-github-alt />
      </a>
      <toggle-theme />
    </nav>
  </header>
</template>

<style scoped>
.header h1 {
  margin-bottom: 0;
}
.logo {
  position: absolute;
  left: 1.5rem;
  top: 1.5rem;
}
.nav {
  display: grid;
  box-sizing: border-box;
  padding: 2rem;
  width: 100%;
  grid-template-columns: auto max-content;
}
.nav > * {
  margin: auto;
}
.nav img {
  margin-bottom: 0;
}
.nav a {
  outline: none;
  opacity: 0.6;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: opacity 0.2s ease;
}
.nav a:hover {
  opacity: 1;
  text-decoration-color: inherit;
}
.nav .right {
  display: grid;
  grid-gap: 1.2rem;
  grid-auto-flow: column;
}
.nav .right > * {
  margin: auto;
}
</style>
