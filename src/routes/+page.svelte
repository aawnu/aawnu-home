<script lang="ts">
  import ArrowSquareOut from 'phosphor-svelte/lib/ArrowSquareOut'
  import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt'
  import Button from '$lib/components/ui/button/button.svelte'
  import Northbased from '$lib/icons/northbased.svelte'
  import Proxyseed from '$lib/icons/proxyseed.svelte'
  import Skaber from '$lib/icons/skaber.svelte'
  import Finansteori from '$lib/icons/finansteori.svelte'
  import * as HoverCard from '$lib/components/ui/hover-card/index.js'
  import Streampo1nt from '$lib/icons/streampo1nt.svelte'
</script>

<svelte:head>
  <title>Alex Ahlgreen Westergaard</title>
  <meta name="description" content="I develop web software, invest in businesses & play video games." />
  <meta property="og:url" content="https://aaw.nu/" />
  <meta property="og:site_name " content="AAW" />
  <meta property="og:locale " content="en_DK" />
  <meta property="og:title" content="Alex Ahlgreen Westergaard" />
  <meta property="og:description" content="I develop web software, invest in businesses & play video games." />
  <meta property="og:type" content="profile" />
  <meta property="og:image" content="https://aaw.nu/src/me/alex-in-suit.jpg" />
  <meta property="og:profile:first_name" content="Alex" />
  <meta property="og:profile:last_name" content="Ahlgreen Westergaard" />
  <meta property="og:profile:gender" content="male" />
  <script type="application/ld+json">
    {
      "@context": "https://schema.org/",
      "@type": "AboutPage",
      "about": {
        "@type": "Thing",
        "url": "https://aaw.nu/",
        "name": "Alex Ahlgreen Westergaard",
        "description": "I develop web software, invest in businesses & play video games."
      },
      "copyrightYear": "2024",
      "url": "https://aaw.nu/"
    }
  </script>
</svelte:head>

<div class="herobg">
  <div class="px-4">
    <div class="container grid grid-cols-1 items-center py-16">
      <div class="z-10 col-start-1 row-start-1">
        <h1 class="text-center text-4xl font-black !leading-tight sm:text-5xl md:text-6xl lg:text-left">
          <span class="inline text-slate-900 md:block">I develop web software,</span>
          <span class="inline text-slate-800 md:block">invest in businesses &amp;</span>
          <span class="inline text-slate-700 md:block">play video games.</span>
        </h1>
        <div class="mt-8 flex justify-center gap-x-2 lg:justify-start">
          <Button class="font-black" size="lg" href="mailto:aaw@aaw.nu" target="_blank" rel="noopener noreferrer">
            <PaperPlaneTilt class="mr-2 text-lg leading-none" weight="bold" /> I'm available for hire!
          </Button>
        </div>
      </div>
      <div class="col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:justify-end">
        <img
          class="hidden h-[50vh] max-h-[28rem] rounded-xl opacity-[.20] sm:block lg:opacity-[.10]"
          src="/src/me/alex-in-blazer.jpg"
          alt="Alex with icecream" />
        <img
          class="hidden h-[50vh] max-h-[28rem] rounded-xl opacity-[.20] lg:opacity-[.30] xl:block"
          src="/src/me/alex-with-icecream.jpg"
          alt="Alex with icecream" />
        <img
          class="hidden h-[50vh] max-h-[28rem] rounded-xl opacity-[.20] md:block lg:opacity-[.40] xl:opacity-[.60]"
          src="/src/me/alex-in-jordan-tshirt.jpg"
          alt="Alex in Jordan T-Shirt" />
        <img class="block h-[50vh] max-h-[28rem] rounded-xl opacity-[.20] lg:opacity-100" src="/src/me/alex-in-suit.jpg" alt="Alex in Suit" />
      </div>
    </div>
  </div>

  <div class="container bg-background px-8 py-12 2xl:rounded-t-lg">
    <div class="grid auto-rows-max grid-cols-2 items-center justify-center gap-x-12 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      <HoverCard.Root>
        <HoverCard.Trigger class="flex items-center justify-center">
          <Proxyseed class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800" />
        </HoverCard.Trigger>
        <HoverCard.Content class="w-full max-w-96">
          <h6 class="font-black leading-tight">PROXYSEED</h6>
          <p class="leading-normal">Intermediary company to invest in interesting people and business ventures.</p>
          <p class="mt-2 text-sm font-bold leading-tight">
            <a class="text-primary" href="mailto:aaw@proxyseed.com" target="_blank" rel="noopener noreferrer">
              <PaperPlaneTilt class="text-icon" weight="bold" /> aaw@proxyseed.com
            </a>
          </p>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger class="flex items-center justify-center">
          <Northbased class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800" />
        </HoverCard.Trigger>
        <HoverCard.Content class="w-full max-w-96">
          <h6 class="font-black leading-tight">Northbased</h6>
          <p class="leading-normal">Helping businesses be present and/or bring their infrastructure online.</p>
          <p class="mt-2 text-sm font-bold leading-tight">
            <a class="text-primary" href="http://northbased.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
              <ArrowSquareOut class="text-icon" weight="bold" /> Northbased.net
            </a>
          </p>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger class="flex items-center justify-center">
          <Skaber class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800" />
        </HoverCard.Trigger>
        <HoverCard.Content class="w-full max-w-96">
          <h6 class="font-black leading-tight">SKABER</h6>
          <p class="leading-normal">Helping content creators collaborate with businesses more transparently.</p>
          <p class="mt-2 text-sm font-bold leading-tight">
            <a class="text-primary" href="http://skaber.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
              <ArrowSquareOut class="text-icon" weight="bold" /> Skaber.net
            </a>
          </p>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger class="flex items-center justify-center">
          <Streampo1nt class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800" />
        </HoverCard.Trigger>
        <HoverCard.Content class="w-full max-w-96">
          <h6 class="font-black leading-tight">STREAMPO1NT</h6>
          <p class="leading-normal">Promoting organisations and events through content production and influencers.</p>
          <p class="mt-2 text-sm font-bold leading-tight">
            <a class="text-primary" href="http://streampo1nt.com?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
              <ArrowSquareOut class="text-icon" weight="bold" /> Streampo1nt.com
            </a>
          </p>
        </HoverCard.Content>
      </HoverCard.Root>

      <HoverCard.Root>
        <HoverCard.Trigger class="flex items-center justify-center">
          <Finansteori class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800" />
        </HoverCard.Trigger>
        <HoverCard.Content class="w-full max-w-96">
          <h6 class="font-black leading-tight">Finansteori</h6>
          <p class="leading-normal">Danish blog about improving personal finances and how to start investing.</p>
          <p class="mt-2 text-sm font-bold leading-tight">
            <a class="text-primary" href="http://finansteori.dk?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
              <ArrowSquareOut class="text-icon" weight="bold" /> Finansteori.dk
            </a>
          </p>
        </HoverCard.Content>
      </HoverCard.Root>
    </div>
  </div>
</div>
