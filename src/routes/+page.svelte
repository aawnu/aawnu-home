<script lang="ts">
  import Northbased from '$lib/icons/northbased.svelte'
  import Proxyseed from '$lib/icons/proxyseed.svelte'
  import Skaber from '$lib/icons/skaber.svelte'
  import Finansteori from '$lib/icons/finansteori.svelte'
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
  <div class="container grid grid-cols-1 items-center py-16 lg:grid-cols-3">
    <div class="lg:col-span-2">
      <h1 class="text-center text-4xl font-black !leading-tight sm:text-5xl md:text-6xl lg:text-left">
        <span class="inline text-slate-900 dark:text-slate-200 md:block">I develop web software,</span>
        <span class="inline text-slate-800 dark:text-slate-300 md:block">invest in businesses &amp;</span>
        <span class="inline text-slate-700 dark:text-slate-400 md:block">play video games.</span>
      </h1>
    </div>
    <div class="row-start-1 flex items-center justify-center lg:row-auto">
      <img class="max-h-[12rem] rounded-full bg-primary lg:max-h-[20rem]" src="/src/me/alex-profile.png" alt="Alex Ahlgreen Westergaard - Portrait" />
    </div>
  </div>
</div>

<div class="container py-12 2xl:rounded-t-lg">
  <div class="grid auto-rows-max grid-cols-2 items-center justify-center gap-x-12 gap-y-8 sm:grid-cols-3 lg:grid-cols-4">
    <Proxyseed class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
    <Northbased class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
    <Skaber class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
    <Finansteori class="h-full max-h-[4rem] w-full max-w-[12rem] fill-slate-800 dark:fill-slate-200" />
  </div>
</div>
