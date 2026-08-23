<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';
  import PlayCTA from './PlayCTA.svelte';

  const individualImage = campaign.individualCampaignImage ? `${base}${campaign.individualCampaignImage}` : '';
  const totalImage = campaign.totalCampaignImage ? `${base}${campaign.totalCampaignImage}` : '';
  const formatPlays = (plays: number) => `${Math.floor(plays / 10_000)}万再生`;
</script>

<section class="content-section campaign-section" aria-labelledby="campaign-title">
  <div class="section-heading">
    <p class="eyebrow">CAMPAIGN</p>
    <h2 id="campaign-title">今回のキャンペーン</h2>
    <p><strong>{campaign.songTitle}</strong> を聴くと、今回の再生キャンペーンの応援につながります。</p>
  </div>

  <div class="campaign-grid">
    <article class="campaign-card reward-card">
      <div class="card-kicker">🎁 個人再生数でもらえる特典</div>
      {#if individualImage}
        <img class="campaign-image" src={individualImage} alt="個人再生数プレゼントのキャンペーン案内" />
      {/if}

      <div class="reward-list">
        {#each campaign.individualRewards as reward}
          <div class="reward-item">
            {#if reward.plays}
              <strong class="reward-plays">{reward.plays.toLocaleString()}回</strong>
            {/if}
            <div>
              <h3>{reward.title}</h3>
              {#if reward.description}<p>{reward.description}</p>{/if}
            </div>
          </div>
        {/each}
      </div>

      <p class="friendly-note">特典の回数まで届かなくても、その再生は総再生数の応援になります。</p>
    </article>

    <article class="campaign-card milestone-card">
      <div class="card-kicker">🌟 総再生数で解放される特典</div>
      {#if totalImage}
        <img class="campaign-image" src={totalImage} alt="総再生回数企画のキャンペーン案内" />
      {/if}

      <ol class="milestone-list">
        {#each campaign.totalMilestones as milestone, index}
          <li>
            <div class="milestone-badge">{index + 1}</div>
            <div>
              <strong>{formatPlays(milestone.plays)}</strong>
              <h3>{milestone.title}</h3>
              <p>{milestone.description}</p>
            </div>
          </li>
        {/each}
      </ol>

      <p class="friendly-note">50万・70万・100万回は、参加しているみんなの合計です。1人で目指す数字ではありません。</p>
    </article>
  </div>

  <PlayCTA label="対象曲を聴いてみる" placement="campaign-play" />
  {#if campaign.officialCampaignUrl}
    <a class="text-link" href={campaign.officialCampaignUrl} target="_blank" rel="noopener noreferrer">公式のキャンペーン案内を見る ↗</a>
  {/if}
</section>
