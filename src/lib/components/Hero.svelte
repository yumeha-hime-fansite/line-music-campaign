<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';
  import PlayCTA from './PlayCTA.svelte';

  const imageSrc = campaign.individualCampaignImage ? `${base}${campaign.individualCampaignImage}` : '';
</script>

<section class="hero section-shell" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow">夢羽ヒメ LINE MUSIC 再生キャンペーン</p>
    <h1 id="hero-title">ヒメさんの新曲を<br /><span>LINE MUSICで応援しよう！</span></h1>
    <p class="hero-lead">「参加してみたいけど、やり方を調べるのがちょっと面倒……」そんな人でも大丈夫。</p>
    <p class="hero-message"><strong>まずは対象曲を1回聴くところから。</strong></p>

    <div class="song-chip" aria-label="今回の対象曲">
      <span class="song-icon" aria-hidden="true">♪</span>
      <div>
        <small>今回の対象曲</small>
        <strong>{campaign.songTitle}</strong>
        <span>{campaign.campaignPeriod}</span>
      </div>
    </div>

    <PlayCTA label="LINE MUSICで聴いてみる" placement="hero-play" />
    <p class="microcopy">たくさん再生するのは、そのあとでもOK。</p>
  </div>

  <div class="hero-visual" aria-hidden={!imageSrc}>
    {#if imageSrc}
      <img src={imageSrc} alt={`${campaign.songTitle} 再生キャンペーン`} />
    {:else}
      <div class="visual-placeholder">
        <span class="note note-a">♪</span>
        <span class="note note-b">♫</span>
        <div class="disc"><span>♪</span></div>
        <p>キャンペーン画像<br />掲載予定</p>
      </div>
    {/if}
  </div>
</section>
