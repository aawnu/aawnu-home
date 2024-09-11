<script lang="ts">
  import ArrowSquareOut from 'phosphor-svelte/lib/ArrowSquareOut'
  import LinkedinLogo from 'phosphor-svelte/lib/LinkedinLogo'
  import GithubLogo from 'phosphor-svelte/lib/GithubLogo'
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

  <div class="container bg-slate-50 bg-[url(/src/bg/seamless_paper_texture.png)] px-8 py-12 shadow-inner 2xl:rounded-xl">
    <div class="grid auto-rows-max grid-cols-2 items-center justify-center gap-x-12 gap-y-8 sm:grid-cols-3 lg:grid-cols-5">
      <div class="flex items-center justify-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Proxyseed class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-700" />
          </HoverCard.Trigger>
          <HoverCard.Content class="w-full max-w-96">
            <p class="leading-normal">Intermediary company to invest in interesting people and business ventures.</p>
            <p class="mt-2 text-sm font-bold leading-tight">
              <a class="text-primary" href="mailto:aaw@proxyseed.com" target="_blank" rel="noopener noreferrer">
                <PaperPlaneTilt class="text-icon" weight="bold" /> aaw@proxyseed.com
              </a>
            </p>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <div class="flex items-center justify-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Northbased class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-700" />
          </HoverCard.Trigger>
          <HoverCard.Content class="w-full max-w-96">
            <p class="leading-normal">Helping businesses be present and/or bring their infrastructure online.</p>
            <p class="mt-2 text-sm font-bold leading-tight">
              <a class="text-primary" href="http://northbased.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
                <ArrowSquareOut class="text-icon" weight="bold" /> Northbased.net
              </a>
            </p>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <div class="flex items-center justify-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Skaber class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-700" />
          </HoverCard.Trigger>
          <HoverCard.Content class="w-full max-w-96">
            <p class="leading-normal">Helping content creators collaborate with businesses more transparently.</p>
            <p class="mt-2 text-sm font-bold leading-tight">
              <a class="text-primary" href="http://skaber.net?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
                <ArrowSquareOut class="text-icon" weight="bold" /> Skaber.net
              </a>
            </p>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <div class="flex items-center justify-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Streampo1nt class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-700" />
          </HoverCard.Trigger>
          <HoverCard.Content class="w-full max-w-96">
            <p class="leading-normal">Promoting organisations and events through content production and influencers.</p>
            <p class="mt-2 text-sm font-bold leading-tight">
              <a class="text-primary" href="http://streampo1nt.com?ref=aaw.nu" target="_blank" rel="noopener noreferrer">
                <ArrowSquareOut class="text-icon" weight="bold" /> Streampo1nt.com
              </a>
            </p>
          </HoverCard.Content>
        </HoverCard.Root>
      </div>

      <div class="flex items-center justify-center">
        <HoverCard.Root>
          <HoverCard.Trigger>
            <Finansteori class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-700" />
          </HoverCard.Trigger>
          <HoverCard.Content class="w-full max-w-96">
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
</div>

<div class="container max-w-screen-md px-8 py-12">
  <div class="space-y-2">
    <h2 class="text-xl font-medium leading-none"><span class="font-black">Atychiphobia:</span> The Rat Race Begins</h2>
    <p class="leading-relaxed">
      I began my business adventure at the age of 12-13, driven by the fear that the government could turn your life upside down at any time. I'm networking
      with and looking into business owners all across the world to figure out how to make it out of the so-called Rat Race. I was struck with a great fear of
      failure, which was compounded by school teachers and tutors pointing out that I would amount to nothing. Opening a downward spiral of unsuccessful
      initiatives and entry-level jobs with no progress.
    </p>
    <p class="leading-relaxed">
      It would take me around 16 years to develop the capacity to see past other people's opinions and acquire momentum in trying new activities, regardless of
      the drawbacks and dangers involved. Allow me to attempt to be alright with unforeseen situations and find the strength to face any difficulties that may
      arise. It feels like a new beginning, but it's really simply the start of the next chapter.
    </p>
    <p class="leading-relaxed">You could call this my <b class="underline underline-offset-4">Just Do It</b> phase against all odds.</p>
  </div>
</div>
