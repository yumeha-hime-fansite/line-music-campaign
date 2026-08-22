<script lang="ts">
  import { campaign } from '$lib/data/campaign';

  let {
    label = `LINE MUSICで${campaign.songTitle}を聴く`,
    placement = 'unknown',
    compact = false
  }: {
    label?: string;
    placement?: string;
    compact?: boolean;
  } = $props();
</script>

{#if campaign.songUrl}
  <a
    class:compact
    class="play-cta"
    href={campaign.songUrl}
    target="_blank"
    rel="noopener noreferrer"
    data-cta={placement}
  >
    <span aria-hidden="true">♪</span>
    <span>{label}</span>
  </a>
{:else}
  <span class:compact class="play-cta disabled" aria-disabled="true" title="campaign.ts に楽曲URLを設定してください">
    <span aria-hidden="true">♪</span>
    <span>楽曲リンク設定待ち</span>
  </span>
{/if}
