<script lang="ts">
  import { campaign } from '$lib/data/campaign';
</script>

<section class="content-section count-section" aria-labelledby="count-title">
  <div class="section-heading">
    <p class="eyebrow">CHECK</p>
    <h2 id="count-title">ちゃんと再生できてる？</h2>
    <p>自分の再生回数を見てみよう。</p>
  </div>

  <div class="phone-flow" aria-label="再生回数確認の流れ">
    <div class="phone-mock"><span>LINE MUSIC</span><strong>ランキング</strong><small>ここを開く</small></div>
    <span class="flow-arrow" aria-hidden="true">↓</span>
    <div class="phone-mock"><span>ランキング</span><strong>User's TOP50</strong><small>自分のランキング</small></div>
    <span class="flow-arrow" aria-hidden="true">↓</span>
    <div class="phone-mock result"><span>{campaign.songTitle}</span><strong>○○回</strong><small>数字が増えていればOK！</small></div>
  </div>

  <div class="tip-card">
    <div class="tip-icon" aria-hidden="true">💡</div>
    <div><h3>User's TOP50が出てこない？</h3><p>初めて使う場合は、直近3か月に<strong>「異なる20曲以上」</strong>を聴く必要があります。</p><p>同じ曲を20回ではなく、別々の20曲です。ヒメさんの曲や好きな曲を20曲聴けばOK！</p></div>
  </div>

  <div class="info-card">
    <strong>今日聴いたのに増えていなくても大丈夫</strong>
    <p>再生回数はリアルタイムではなく、基本的に翌日・1日1回のタイミングで更新されます。</p>
  </div>
</section>
