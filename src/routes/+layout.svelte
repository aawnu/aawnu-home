<script lang="ts">
  import '../app.css'
  import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo'
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo'
  import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt'
  import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo'
  import GlobeX from 'phosphor-svelte/lib/GlobeX'
  import Certificate from 'phosphor-svelte/lib/Certificate'
  import Handshake from 'phosphor-svelte/lib/Handshake'
  import StackOverflowLogo from 'phosphor-svelte/lib/StackOverflowLogo'
  import Button from '$lib/components/ui/button/button.svelte'
</script>

<div class="min-h-[75vh]">
  <header class="px-8">
    <div class="container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8">
      <a class="text-xl font-black hover:text-primary" href="/"> AAW </a>
      <nav>
        <Button
          href="https://instagram.com/aawnu"
          target="_blank"
          rel="noopener noreferrer"
          class="group text-lg hover:bg-transparent"
          size="icon"
          variant="ghost">
          <InstagramLogo class="group-hover:fill-primary" />
        </Button>
        <Button
          href="https://linkedin.com/in/alexwestergaard/"
          target="_blank"
          rel="noopener noreferrer"
          class="group text-lg hover:bg-transparent"
          size="icon"
          variant="ghost">
          <LinkedinLogo class="group-hover:fill-primary" />
        </Button>
        <Button
          href="https://github.com/aawnu"
          target="_blank"
          rel="noopener noreferrer"
          class="group text-lg hover:bg-transparent"
          size="icon"
          variant="ghost">
          <GithubLogo class="group-hover:fill-primary" />
        </Button>
        <Button href="mailto:aaw@aaw.nu" target="_blank" rel="noopener noreferrer" class="group text-lg hover:bg-transparent" size="icon" variant="ghost">
          <PaperPlaneTilt class="group-hover:fill-primary" />
        </Button>
      </nav>
    </div>
  </header>

  <slot />
</div>

<footer>
  <div class="px-8">
    <div class="container py-4">
      <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <div>2024 &copy; Alex Ahlgreen Westergaard</div>
          <div><GlobeX weight="light" class="inline-block" /> Skive, Denmark</div>
        </div>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <div>
            <a class="text-primary" href="/src/diploma/gdpr-da-diplom-neo-compliance.pdf" target="_blank">
              <Certificate weight="light" class="inline-block fill-foreground" /> GDPR Compliant
            </a>
          </div>
          <div>
            <a class="text-primary" href="/privacy">
              <Handshake weight="light" class="inline-block fill-foreground" /> Your Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
