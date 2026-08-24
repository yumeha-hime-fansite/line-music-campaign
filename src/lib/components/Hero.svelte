<script lang="ts">
  import { campaign } from '$lib/data/campaign';
  import PlayCTA from './PlayCTA.svelte';
</script>

<!--
  キャンペーン画像はCampaignInfo側で表示するため、
  Heroは常に中央1カラムで表示する。
-->
<section class="hero hero-single section-shell" aria-labelledby="hero-title">
  <div class="hero-copy">
    <p class="eyebrow">夢羽ヒメ LINE MUSIC 再生キャンペーン</p>
    <p class="fan-guide-label">ファンがまとめた非公式ガイド</p>

    <h1 id="hero-title">
      ヒメさんの新曲を<br />
      <span>LINE MUSICで応援しよう！</span>
    </h1>

    <p class="hero-lead">
      「参加してみたいけど、やり方を調べるのがちょっと面倒……」
      そんな人向けに、迷いやすいところだけまとめました。
    </p>

    <p class="hero-message">
      <strong>まずは対象曲を1回聴くところから。</strong>
    </p>

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

  <style>
    .fan-guide-label {
      width: fit-content;
      margin: 10px 0 4px;
      padding: 4px 10px;
      border: 1px solid var(--lavender-light);
      border-radius: 999px;
      background: rgba(255, 255, 255, .7);
      color: var(--lavender-dark);
      font-size: .74rem;
      font-weight: 800;
    }
  </style>
</section>
