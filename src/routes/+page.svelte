<script lang="ts">
  import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo'
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo'
  import PaperPlaneTilt from 'phosphor-svelte/lib/PaperPlaneTilt'
  import Button from '$lib/components/ui/button/button.svelte'
  import Northbased from '$lib/icons/northbased.svelte'
  import Proxyseed from '$lib/icons/proxyseed.svelte'
  import Skaber from '$lib/icons/skaber.svelte'
  import Finansteori from '$lib/icons/finansteori.svelte'
</script>

<svelte:head>
  <title>AAW | Alex Ahlgreen Westergaard</title>
  <meta name="description" content="I develop web software, invest in businesses & play video games." />
  <meta property="og:url" content="https://aaw.nu/" />
  <meta property="og:site_name " content="AAW" />
  <meta property="og:locale " content="en_DK" />
  <meta property="og:title" content="Alex Ahlgreen Westergaard" />
  <meta property="og:description" content="I develop web software, invest in businesses & play video games." />
  <meta property="og:type" content="profile" />
  <meta property="og:profile:first_name" content="Alex" />
  <meta property="og:profile:last_name" content="Ahlgreen Westergaard" />
  <meta property="og:profile:gender" content="male" />
</svelte:head>

<div class="herobg">
  <div class="container grid min-h-[65vh] grid-cols-1 items-center py-12">
    <div class="z-10 col-start-1 row-start-1">
      <h1 class="text-center text-4xl font-black !leading-tight sm:text-5xl md:text-6xl lg:text-left">
        <span class="inline text-slate-900 md:block">I develop web software,</span>
        <span class="inline text-slate-800 md:block">invest in businesses &amp;</span>
        <span class="inline text-slate-700 md:block">play video games.</span>
      </h1>
      <div class="mt-8 flex justify-center gap-x-2 lg:justify-start">
        <a href="mailto:aaw@aaw.nu" target="_blank" rel="noopener noreferrer">
          <Button class="font-black">
            <PaperPlaneTilt class="mr-2 text-lg leading-none" weight="bold" /> I'm available for hire!
          </Button>
        </a>
        <a class="group" href="https://linkedin.com/in/alexwestergaard/" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline">
            <LinkedinLogo class="text-lg leading-none group-hover:fill-primary" />
          </Button>
        </a>
        <a class="group" href="https://github.com/aawnu" target="_blank" rel="noopener noreferrer">
          <Button size="icon" variant="outline">
            <GithubLogo class="text-lg leading-none group-hover:fill-primary" />
          </Button>
        </a>
      </div>
    </div>
    <div class="col-start-1 row-start-1 flex flex-wrap items-center justify-center gap-4 md:flex-nowrap lg:justify-end">
      <img class="hidden max-h-[50vh] rounded-xl opacity-[.20] sm:block lg:opacity-[.10]" src="/src/me/alex-in-blazer.jpg" alt="Alex with icecream" />
      <img class="hidden max-h-[50vh] rounded-xl opacity-[.20] lg:opacity-[.30] xl:block" src="/src/me/alex-with-icecream.jpg" alt="Alex with icecream" />
      <img
        class="hidden max-h-[50vh] rounded-xl opacity-[.20] md:block lg:opacity-[.40] xl:opacity-[.60]"
        src="/src/me/alex-in-jordan-tshirt.jpg"
        alt="Alex in Jordan T-Shirt" />
      <img class="block max-h-[50vh] rounded-xl opacity-[.20] lg:opacity-100" src="/src/me/alex-in-suit.jpg" alt="Alex in Suit" />
    </div>
  </div>
</div>

<div class="bg-slate-50 bg-[url(/src/bg/seamless_paper_texture.png)] bg-blend-luminosity shadow-inner">
  <div class="container py-12">
    <div class="justify-ceenter grid auto-rows-max grid-cols-1 place-items-center items-center gap-x-12 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
      <Proxyseed class="max-h-[4rem] max-w-[12rem] fill-slate-700" />

      <Northbased class="max-h-[4rem] max-w-[12rem] fill-slate-700" />

      <Skaber class="max-h-[4rem] max-w-[12rem] fill-slate-700" />

      <Finansteori class="max-h-[4rem] max-w-[12rem] fill-slate-700" />
    </div>
  </div>
</div>
