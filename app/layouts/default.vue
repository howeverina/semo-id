<script setup>

</script>

<template>
    <header>
        <h1 id="page-title">세모이드</h1>
        <div><a href="/">소개</a></div>
        <div><a href="/maker">메이커</a></div>
    </header>
  <div id="all-wrapper">
    <slot />
  </div>
</template>

<style>
    #all-wrapper {
        width: 100%;
        max-width: 1020px;
        margin: 2rem auto;
        padding: 10px;
        border: 1px solid var(--line);
        border-radius: 15px;
        background-color: white;
    }

    header {
        width: 100vw;
        height: 4rem;
        background-color: var(--accent);
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 2rem;
    }

    header #page-title {
        color: white;
        font-size: 2rem;
        font-weight: 700;
        font-family: '116Subakhwa';
    }

    header > div > a {
        color: white;
        text-decoration: none;
    }
</style>