<template>
  <NuxtLayout>
    <div id="app-wrapper">
      <NuxtPage />
    </div>
  </NuxtLayout>
</template>
<style>

  @font-face {
    font-family: '116Subakhwa';
    src: url('https://gcore.jsdelivr.net/gh/projectnoonnu/noonfonts_six@1.0/116watermelon.woff') format('woff');
    font-weight: 700;
    font-display: swap;
}
  
 @font-face {
    font-family: 'GyeonggiMillenniumTitle';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Title_Light.woff') format('woff');
    font-weight: 400;
    font-display: swap;
}


@font-face {
    font-family: 'GyeonggiMillenniumTitle';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/2410-3@1.0/Title_Bold.woff') format('woff');
    font-weight: 700;
    font-display: swap;
}

  :root {
    --accent: #ff5e8e;
    --line: #ddd;
    --bg: #f5f5f5;
    --accentbg: #ffc9d9;
    --fg: #1e1f25;
  }

  body {
    font-family: 'GyeonggiMillenniumTitle';
    color: var(--fg);
    background-color: var(--bg);
    font-size: 18px;
    line-height: 1.8;
    margin: 0;
    padding: 0;
  }

  input {
    font-family: '116Subakhwa';
    color: var(--fg);
  }
        
</style>