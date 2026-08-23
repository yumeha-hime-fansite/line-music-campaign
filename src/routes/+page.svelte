<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';
  import Hero from '$lib/components/Hero.svelte';
  import Steps from '$lib/components/Steps.svelte';
  import CampaignInfo from '$lib/components/CampaignInfo.svelte';
  import BeginnerGuide from '$lib/components/BeginnerGuide.svelte';
  import PlayCountGuide from '$lib/components/PlayCountGuide.svelte';
  import CountRules from '$lib/components/CountRules.svelte';
  import FAQ from '$lib/components/FAQ.svelte';
  import Application from '$lib/components/Application.svelte';
  import FinalCTA from '$lib/components/FinalCTA.svelte';
  import PlayCTA from '$lib/components/PlayCTA.svelte';
  import MorePlayTeaser from '$lib/components/MorePlayTeaser.svelte';
  import MainQuickNav from '$lib/components/MainQuickNav.svelte';

  const siteOrigin = 'https://yumeha-hime-fansite.github.io';
  const canonicalUrl = `${siteOrigin}${base}/`;
  const ogImage = campaign.ogImage ? `${siteOrigin}${base}${campaign.ogImage}` : '';
</script>

<svelte:head>
  <title>{campaign.artistName}｜LINE MUSIC再生キャンペーン参加ガイド</title>
  <meta name="description" content={`${campaign.artistName}「${campaign.songTitle}」のLINE MUSIC再生キャンペーンに、初めてでも迷わず参加するためのファンによる非公式ガイド。`} />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content={`${campaign.artistName}｜LINE MUSIC再生キャンペーン参加ガイド`} />
  <meta property="og:description" content="難しそうに見える再生キャンペーンも、まずは1回聴くところから。" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content={canonicalUrl} />
  {#if ogImage}<meta property="og:image" content={ogImage} />{/if}
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<main>
  <Hero />
  <Steps />
  <MainQuickNav />
  <CampaignInfo />
  <BeginnerGuide />
  <PlayCountGuide />
  <CountRules />

  <section class="mid-cta content-section" aria-label="再生案内">
    <p>ここまで分かれば、もう準備OK。</p>
    <h2>難しく考えすぎず、まずはヒメさんの曲を楽しんでみよう。</h2>
    <PlayCTA label="LINE MUSICで再生する" placement="mid-play" />
  </section>

  <Application />
  <FAQ />
  <MorePlayTeaser />
  <FinalCTA />

  <footer class="site-footer">
    <p>このサイトはファンによる非公式の参加ガイドです。正式な条件はキャンペーン公式案内をご確認ください。</p>
  </footer>
</main>

<div class="sticky-cta">
  <PlayCTA label="対象曲を聴く" placement="sticky-play" compact={true} />
</div>
