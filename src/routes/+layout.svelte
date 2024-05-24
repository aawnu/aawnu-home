<script>
  import "../app.css";
  import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
  import GlobeX from "phosphor-svelte/lib/GlobeX";
  import Copyright from "phosphor-svelte/lib/Copyright";
</script>

<main class="min-h-[75vh]">
  <slot />
</main>

<footer>
  <div class="container mx-auto">
    <div class="flex items-center justify-center gap-x-6 p-4 text-sm font-light">
      <div><Copyright weight="light" class="inline-block" /> 2024</div>
      <div><GlobeX weight="light" class="inline-block" /> Denmark</div>
      <div>
        <a class="text-brand-link" href="mailto:aaw@aaw.nu" rel="noopener noreferrer">
          <PaperPlaneTilt weight="light" class="inline-block" /> aaw@aaw.nu
        </a>
      </div>
    </div>
  </div>
</footer>
