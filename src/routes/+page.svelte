<script lang="ts">
  import ArrowSquareOut from 'phosphor-svelte/lib/ArrowSquareOut'
  import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt'
  import Button from '$lib/components/ui/button/button.svelte'
  import Northbased from '$lib/icons/northbased.svelte'
  import Proxyseed from '$lib/icons/proxyseed.svelte'
  import Skaber from '$lib/icons/skaber.svelte'
  import Finansteori from '$lib/icons/finansteori.svelte'
  import * as Dialog from '$lib/components/ui/dialog'
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
    <div class="container grid grid-cols-1 items-center py-16 lg:grid-cols-3">
      <div class="lg:col-span-2">
        <h1 class="text-center text-4xl font-black !leading-tight sm:text-5xl md:text-6xl lg:text-left">
          <span class="inline text-slate-900 dark:text-slate-200 md:block">I develop web software,</span>
          <span class="inline text-slate-800 dark:text-slate-300 md:block">invest in businesses &amp;</span>
          <span class="inline text-slate-700 dark:text-slate-400 md:block">play video games.</span>
        </h1>
        <div class="mt-8 flex justify-center gap-x-2 lg:justify-start">
          <Button class="font-black" size="lg" href="mailto:aaw@aaw.nu" target="_blank" rel="noopener noreferrer">
            <PaperPlaneTilt class="mr-2 text-lg leading-none" weight="bold" /> I'm available for hire!
          </Button>
        </div>
      </div>
      <div class="row-start-1 flex items-center justify-center lg:row-auto">
        <img class="max-h-[14rem] rounded-full bg-primary lg:max-h-[28rem]" src="/src/me/alex-profile.png" alt="Alex with icecream" />
      </div>
    </div>
  </div>
</div>

<div class="container px-8 py-12 2xl:rounded-t-lg">
  <div class="grid auto-rows-max grid-cols-2 items-center justify-center gap-x-12 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
    <Dialog.Root>
      <Dialog.Trigger class="flex items-center justify-center">
        <Proxyseed class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-96">
        <Dialog.Header>
          <Dialog.Title>PROXYSEED</Dialog.Title>
          <Dialog.Description class="leading-normal">Intermediary company to invest in interesting people and business ventures.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer class="mt-2 text-sm font-bold leading-tight sm:justify-center">
          <Button class="font-bold" href="mailto:aaw@proxyseed.com" target="_blank" rel="noopener noreferrer">
            aaw@proxyseed.com <PaperPlaneTilt class="text-icon ml-1" weight="bold" />
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>

    <Dialog.Root>
      <Dialog.Trigger class="flex items-center justify-center">
        <Northbased class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-96">
        <Dialog.Header>
          <Dialog.Title>Northbased</Dialog.Title>
          <Dialog.Description class="leading-normal">Helping businesses be present and/or bring their infrastructure online.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer class="mt-2 text-sm font-bold leading-tight sm:justify-center">
          <Button class="font-bold" href="http://northbased.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
            Northbased.net <ArrowSquareOut class="text-icon ml-1" weight="bold" />
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>

    <Dialog.Root>
      <Dialog.Trigger class="flex items-center justify-center">
        <Skaber class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-96">
        <Dialog.Header>
          <Dialog.Title>SKABER</Dialog.Title>
          <Dialog.Description class="leading-normal">Helping content creators collaborate with businesses more transparently.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer class="mt-2 text-sm font-bold leading-tight sm:justify-center">
          <Button class="font-bold" href="http://skaber.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
            Skaber.net <ArrowSquareOut class="text-icon ml-1" weight="bold" />
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>

    <!--
    <Dialog.Root>
      <Dialog.Trigger class="flex items-center justify-center">
        <Streampo1nt class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-96">
        <Dialog.Header>
          <Dialog.Title>STREAMPO1NT</Dialog.Title>
          <Dialog.Description class="leading-normal">Promoting organisations and events through content production and influencers.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer class="mt-2 text-sm font-bold leading-tight sm:justify-center">
          <Button class="font-bold" href="http://streampo1nt.com?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
            Streampo1nt.com <ArrowSquareOut class="text-icon ml-1" weight="bold" />
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
    -->

    <Dialog.Root>
      <Dialog.Trigger class="flex items-center justify-center">
        <Finansteori class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
      </Dialog.Trigger>
      <Dialog.Content class="w-full max-w-96">
        <Dialog.Header>
          <Dialog.Title>Finansteori</Dialog.Title>
          <Dialog.Description class="leading-normal">Danish blog about improving personal finances and how to start investing.</Dialog.Description>
        </Dialog.Header>
        <Dialog.Footer class="mt-2 text-sm font-bold leading-tight sm:justify-center">
          <Button class="font-bold" href="http://finansteori.dk?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
            Finansteori.dk <ArrowSquareOut class="text-icon ml-1" weight="bold" />
          </Button>
        </Dialog.Footer>
      </Dialog.Content>
    </Dialog.Root>
  </div>
</div>
