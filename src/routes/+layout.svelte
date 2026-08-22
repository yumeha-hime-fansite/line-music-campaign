<script lang="ts">
  import '../app.css';
  import Clarity from '$lib/components/Clarity.svelte';
  import DevelopmentBanner from '$lib/components/DevelopmentBanner.svelte';
  import * as publicEnv from '$env/static/public';

  const env = publicEnv as Record<string, string | undefined>;
  const siteVariant = env.PUBLIC_SITE_VARIANT ?? 'develop';

  let { children } = $props();
</script>

<svelte:head>
  {#if siteVariant === 'develop'}
    <meta name="robots" content="noindex,nofollow,noarchive" />
  {/if}
</svelte:head>

<Clarity />
<DevelopmentBanner />
{@render children()}
