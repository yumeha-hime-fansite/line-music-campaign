<script lang="ts">
  import { campaign } from '$lib/data/campaign';
</script>

<section class="content-section application-section" aria-labelledby="application-title">
  <div class="section-heading">
    <p class="eyebrow">DON'T FORGET</p>
    <h2 id="application-title">特典への応募も忘れずに！</h2>
    <p>キャンペーンによっては、再生したあとに応募手続きが必要です。</p>
  </div>

  <ol class="application-flow">
    <li><span>1</span><strong>必要な回数まで再生</strong></li>
    <li><span>2</span><strong>User's TOP50で回数を確認</strong></li>
    <li><span>3</span><strong>指定画面をスクリーンショット</strong></li>
    <li><span>4</span><strong>応募フォームから送信</strong></li>
  </ol>

  {#if campaign.applicationDeadline}
    <p class="deadline">応募締切：<strong>{campaign.applicationDeadline}</strong></p>
  {/if}

  {#if campaign.applicationUrl}
    <a class="secondary-cta" href={campaign.applicationUrl} target="_blank" rel="noopener noreferrer" data-cta="application">🎁 キャンペーンに応募する</a>
  {:else}
    <span class="secondary-cta disabled" aria-disabled="true">応募URL設定待ち</span>
  {/if}
</section>
