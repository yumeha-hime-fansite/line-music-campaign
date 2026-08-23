<script lang="ts">
  import { campaign } from '$lib/data/campaign';
</script>

<section class="content-section application-section" aria-labelledby="application-title">
  <div class="section-heading">
    <p class="eyebrow">REWARD</p>
    <h2 id="application-title">個人特典を狙う場合は、最後に応募があります</h2>
    <p>今回の個人再生数プレゼントは、対象回数に届いたあと、応募フォームから申請する形です。</p>
  </div>

  <ol class="application-flow">
    <li><span>1</span><strong>目標の回数まで再生</strong></li>
    <li><span>2</span><strong>User's TOP50で回数を確認</strong></li>
    <li><span>3</span><strong>指定画面をスクリーンショット</strong></li>
    <li><span>4</span><strong>応募フォームから送信</strong></li>
  </ol>

  {#if campaign.applicationDeadline}
    <p class="deadline">応募締切：<strong>{campaign.applicationDeadline}</strong></p>
  {/if}

  {#if campaign.applicationUrl}
    <a class="secondary-cta" href={campaign.applicationUrl} target="_blank" rel="noopener noreferrer" data-cta="application">🎁 応募フォームを開く</a>
  {/if}
</section>
