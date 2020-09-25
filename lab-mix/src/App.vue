<template>
  <div class="app theme-main">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
:root {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  --size-56: 56px;
  --size-640: 640px;
  --size-360: 360px;

  --space-xxxl: 12.8rem;
  --space-xxl: 6.4rem;
  --space-xl: 4.8rem;
  --space-l: 3.5rem;
  --space-m: 2.4rem;
  --space-s: 1.75rem;
  --space-xs: 0.8rem;
  --space-xxs: 0.4rem;
  --space-xxxs: 0.2rem;

  --size-xxxl: 12.8rem;
  --size-xxl: 6.4rem;
  --size-xl: 4.8rem;
  --size-l: 4rem;
  --size-m: 3.2rem;
  --size-s: 2.8rem;
  --size-xs: 2.4rem;
  --size-xxs: 1.756rem;
  --size-xxs: 1.1rem;

  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;

  --size-panel-padding: 0 var(--space-s);
  --size-input-heigth: var(--size-xl);

  --border-radius: 0.4rem;

  font-family: Montserrat;
  font-size: 14px;
  letter-spacing: 0;
  line-height: 13px;
}
.app {
  height: 100%;
}
.theme-main {
  height: 100%;
  --color-white: #fff;
  --color-black: #000;
  --color-main: #f1f1f1;
  --color-nav: #fff;
  --color-font: #30304c;
  --color-font-inverse: var(--color-white);
  --color-input: #2b2c2f;
  --color-input-hover: #30304c;
  --color-input-icon: #e4e4e0;
  --color-input-icon-hover: #a4a4a4;
  --color-brand: #0d55ff;
  --color-brand-primary: rgb(
    var(--color-brand-primary-r),
    var(--color-brand-primary-g),
    var(--color-brand-primary-b)
  );
  --color-accent-primary: #424242;
  --color-brand-primary-light: #88a7f2;
  --color-brand-primary-dark: #0f1217;
  --color-brand-primary-r: 13;
  --color-brand-primary-g: 85;
  --color-brand-primary-b: 255;
  --color-accent: var(--color-accent-primary);
  --color-accent-light: #093cb5;
  --color-accent-lightest: #7936a31a;
  --color-border-button: #a4a4a4;
  --color-disabled: #fafafe;
  --color-secondary: #fff;
  --color-secondary-font: #0d55ff;
  --color-error-border: #f43157;
  --color-warning: #fac266;
  --color-error: #ff3434;
  --color-success: #8fc765;
  --color-info: #8d66e9;
  color: var(--color-font);
  background-color: #f5f5f5;
}

body {
  background-color: #f5f5f5;
}
</style>
