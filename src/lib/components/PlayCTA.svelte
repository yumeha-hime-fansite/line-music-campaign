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

  // 対象曲への直リンクが未確認なら、過去曲には飛ばさずLINE MUSICへ誘導。
  const fallbackUrl = 'https://music.line.me/top';
</script>

<a
  class:compact
  class="play-cta"
  href={campaign.songUrl || fallbackUrl}
  target="_blank"
  rel="noopener noreferrer"
  data-cta={placement}
  aria-label={campaign.songUrl ? label : 'LINE MUSICを開き、夢羽ヒメのCherishを検索する'}
>
  <span aria-hidden="true">♪</span>
  <span>{campaign.songUrl ? label : 'LINE MUSICで「Cherish」を探す'}</span>
</a>
