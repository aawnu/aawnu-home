<script>
  import { page } from "$app/stores";
  import House from "phosphor-svelte/lib/House";
</script>

<svelte:head>
  <title>AAW | {$page.error?.message}</title>
</svelte:head>

<div class="bg-gradient-to-b from-brand-darkline to-transparent">
  <header class="container mx-auto">
    <div class="flex min-h-[50vh] flex-col items-center justify-end p-4">
      <h1 class="text-center text-4xl font-black">{$page.error?.message}</h1>
      <h2 class="text-center font-thin">Something went wrong</h2>
    </div>
  </header>
</div>

<div class="container mx-auto">
  <nav class="flex items-center justify-center gap-x-8 px-4 py-2 text-2xl">
    <a class="text-sm text-brand-link" href="/" rel="noopener noreferrer">
      <House class="inline-block" weight="bold" /> Go to frontpage
    </a>
  </nav>
</div>
