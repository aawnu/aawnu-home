<script lang="ts">
  import Sun from 'phosphor-svelte/lib/Sun'
  import Moon from 'phosphor-svelte/lib/Moon'

  import { toggleMode } from 'mode-watcher'
  import { Button } from '$lib/components/ui/button/index.js'
</script>

<Button on:click={toggleMode} variant="ghost" size="icon" class="group hover:bg-transparent">
  <Sun class="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-hover:fill-primary" />
  <Moon class="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-hover:fill-primary" />
  <span class="sr-only">Toggle theme</span>
</Button>
