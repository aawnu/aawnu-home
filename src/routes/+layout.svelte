<script lang="ts">
  import '../app.css'
  import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo'
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo'
  import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt'
  import InstagramLogo from 'phosphor-svelte/lib/InstagramLogo'
  import GlobeX from 'phosphor-svelte/lib/GlobeX'
  import Certificate from 'phosphor-svelte/lib/Certificate'
  import Handshake from 'phosphor-svelte/lib/Handshake'
  import UserFocus from 'phosphor-svelte/lib/UserFocus'
  import Button from '$lib/components/ui/button/button.svelte'
  import { ModeWatcher } from 'mode-watcher'
  import Lightswitch from '$lib/components/ui/lightswitch/lightswitch.svelte'

  interface Props {
    children?: import('svelte').Snippet
  }

  let { children }: Props = $props()
</script>

<ModeWatcher defaultMode="system" />

<div class="min-h-[calc(100vh-8rem)]">
  <header>
    <div class="container flex flex-wrap items-center justify-between gap-x-8 gap-y-2 py-8">
      <a class="text-xl font-black hover:text-primary" href="/"> AAW </a>
      <nav class="flex items-center">
        <Lightswitch />

        <span class="mx-2 block h-full w-0 border-l-2 border-l-muted">&nbsp;</span>

        <Button href="https://instagram.com/aawnu" target="_blank" rel="noopener noreferrer" class="group hover:bg-transparent" size="icon" variant="ghost">
          <InstagramLogo class="group-hover:fill-primary" />
        </Button>
        <Button
          href="https://linkedin.com/in/alexwestergaard/"
          target="_blank"
          rel="noopener noreferrer"
          class="group hover:bg-transparent"
          size="icon"
          variant="ghost">
          <LinkedinLogo class="group-hover:fill-primary" />
        </Button>
        <Button href="https://github.com/aawnu" target="_blank" rel="noopener noreferrer" class="group hover:bg-transparent" size="icon" variant="ghost">
          <GithubLogo class="group-hover:fill-primary" />
        </Button>
        <Button href="mailto:aaw@aaw.nu" target="_blank" rel="noopener noreferrer" class="group hover:bg-transparent" size="icon" variant="ghost">
          <PaperPlaneTilt class="group-hover:fill-primary" />
        </Button>
      </nav>
    </div>
  </header>

  {@render children?.()}
</div>

<footer>
  <div>
    <div class="container py-4">
      <div class="flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
        <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <div>2024 &copy; Alex Ahlgreen Westergaard</div>
          <div><GlobeX weight="light" class="text-icon" /> Central Jutland, Denmark</div>
        </div>
        <div class="flex flex-wrap items-center gap-x-8 gap-y-2">
          <div>
            <a class="text-primary" href="https://www.16personalities.com/profiles/f53cd5b80faca" target="_blank" rel="noopener noreferrer">
              <UserFocus weight="light" class="text-icon fill-foreground" /> ENTP-A
            </a>
          </div>
          <div>
            <a class="text-primary" href="/src/diploma/gdpr-da-diplom-neo-compliance.pdf" target="_blank">
              <Certificate weight="light" class="text-icon fill-foreground" /> GDPR Compliant
            </a>
          </div>
          <div>
            <a class="text-primary" href="/privacy">
              <Handshake weight="light" class="text-icon fill-foreground" /> Your Privacy
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
