<script>
  import InstagramLogo from "phosphor-svelte/lib/InstagramLogo";
  import LinkedinLogo from "phosphor-svelte/lib/LinkedinLogo";
  import GithubLogo from "phosphor-svelte/lib/GithubLogo";
  import StackOverflowLogo from "phosphor-svelte/lib/StackOverflowLogo";
  import PaperPlaneTilt from "phosphor-svelte/lib/PaperPlaneTilt";
</script>

<svelte:head>
  <title>AAW | Alex Ahlgreen Westergaard</title>
  <meta name="description" content="Software Developer and Entrepreneur from Denmark" />
  <meta property="og:url" content="https://aaw.nu/" />
  <meta property="og:site_name " content="AAW" />
  <meta property="og:locale " content="en_DK" />
  <meta property="og:title" content="Alex Ahlgreen Westergaard" />
  <meta property="og:description" content="Software Developer and Entrepreneur from Denmark" />
  <meta property="og:type" content="profile" />
  <meta property="og:profile:first_name" content="Alex" />
  <meta property="og:profile:last_name" content="Ahlgreen Westergaard" />
  <meta property="og:profile:gender" content="male" />
</svelte:head>

<div class="bg-gradient-to-b from-brand-darkline to-transparent">
  <header class="container mx-auto">
    <div class="flex min-h-[50vh] flex-col items-center justify-end p-4">
      <img class="max-h-[20vh] rounded-full" src="/img/alex-ahlgreen-westergaard-bw-suit-sq.jpg" alt="Alex Ahlgreen Westergaard" />
      <h1 class="mt-4 text-center text-4xl font-black">Alex Ahlgreen Westergaard</h1>
    </div>
  </header>
</div>

<main class="container mx-auto">
  <nav class="flex items-center justify-center gap-x-8 px-4 py-2 text-2xl">
    <a class="text-brand-link" href="https://instagram.com/aawnu" target="_blank" rel="noopener noreferrer">
      <InstagramLogo weight="bold" />
    </a>
    <a class="text-brand-link" href="https://linkedin.com/in/alexwestergaard/" target="_blank" rel="noopener noreferrer">
      <LinkedinLogo weight="bold" />
    </a>
    <a class="text-brand-link" href="https://github.com/aawnu" target="_blank" rel="noopener noreferrer">
      <GithubLogo weight="bold" />
    </a>
    <a class="text-brand-link" href="https://stackoverflow.com/users/1777189/alex-ahlgreen-westergaard" target="_blank" rel="noopener noreferrer">
      <StackOverflowLogo weight="bold" />
    </a>
    <a class="text-brand-link" href="mailto:aaw@aaw.nu" rel="noopener noreferrer">
      <PaperPlaneTilt weight="bold" />
    </a>
  </nav>
</main>
