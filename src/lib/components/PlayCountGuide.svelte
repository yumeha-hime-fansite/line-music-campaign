<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';

  const rankingTabImage = `${base}/images/line-music/ranking-tab.png`;
</script>

<section class="content-section count-section" aria-labelledby="count-title">
  <div class="section-heading">
    <p class="eyebrow">CHECK</p>
    <h2 id="count-title">再生回数はここで確認できます</h2>
    <p>LINE MUSICのランキング画面にある「○○'s Top 50」で確認できます。</p>
  </div>

  <div class="count-guide">
    <article class="count-step">
      <div class="count-step-heading">
        <span class="count-step-number">1</span>
        <div>
          <h3>画面下の「ランキング」をタップ</h3>
          <p>LINE MUSICアプリ下部にある、トロフィーの「ランキング」を開きます。</p>
        </div>
      </div>

      <figure class="screen-part">
        <img
          src={rankingTabImage}
          alt="LINE MUSIC画面下部のメニュー。ランキングが緑色で選択されている実際の画面"
          loading="lazy"
        />
      </figure>
    </article>

    <article class="count-step">
      <div class="count-step-heading">
        <span class="count-step-number">2</span>
        <div>
          <h3>下へ進んで「○○'s Top 50」を探す</h3>
          <p>一覧の中から対象曲を見つけて、曲の右側にある数字を見ます。</p>
        </div>
      </div>

      <div class="count-example" aria-label="再生回数の見方を示す説明図">
        <p class="example-label">見る場所のイメージ</p>
        <div class="example-row">
          <span class="example-note" aria-hidden="true">♪</span>
          <div>
            <strong>{campaign.songTitle}</strong>
            <small>{campaign.artistName}</small>
          </div>
          <span class="example-count">○○回</span>
        </div>
        <p class="example-caption">↑ この数字が自分の再生回数です</p>
      </div>
    </article>
  </div>

  <div class="tip-card">
    <div class="tip-icon" aria-hidden="true">💡</div>
    <div>
      <h3>「○○'s Top 50」が出てこない？</h3>
      <p>初めて使う場合は、直近3か月に<strong>「異なる20曲以上」</strong>を聴く必要があります。</p>
      <p>同じ曲を20回ではなく、別々の20曲です。ヒメさんの曲や好きな曲を20曲聴けばOK！</p>
    </div>
  </div>

  <div class="info-card">
    <strong>今日聴いたのに増えていなくても大丈夫</strong>
    <p>再生回数はリアルタイムではなく、基本的に翌日・1日1回のタイミングで更新されます。</p>
  </div>

  <style>
    .count-guide {
      display: grid;
      gap: 30px;
      margin: 30px 0;
    }

    .count-step {
      display: grid;
      gap: 16px;
    }

    .count-step-heading {
      display: grid;
      grid-template-columns: 44px 1fr;
      gap: 12px;
      align-items: start;
    }

    .count-step-number {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: var(--lavender-dark);
      color: #fff;
      font-weight: 900;
    }

    .count-step h3,
    .count-step p {
      margin: 0;
    }

    .count-step h3 {
      margin-top: 2px;
      font-size: 1.08rem;
    }

    .count-step p {
      margin-top: 4px;
      color: var(--muted);
      font-size: .92rem;
    }

    .screen-part {
      width: 100%;
      margin: 0;
      overflow: hidden;
      border: 1px solid var(--line);
      border-radius: 18px;
      background: #000;
      box-shadow: var(--shadow);
    }

    .screen-part img {
      width: 100%;
      height: auto;
      display: block;
    }

    .count-example {
      padding: 18px;
      border: 1px solid var(--lavender-light);
      border-radius: 20px;
      background: linear-gradient(145deg, #f7f2fd, #fff);
    }

    .example-label {
      margin: 0 0 10px !important;
      color: var(--lavender-dark) !important;
      font-size: .76rem !important;
      font-weight: 900;
    }

    .example-row {
      display: grid;
      grid-template-columns: 44px minmax(0, 1fr) auto;
      gap: 11px;
      align-items: center;
      padding: 14px;
      border: 1px solid var(--line);
      border-radius: 15px;
      background: #fff;
    }

    .example-note {
      width: 42px;
      height: 42px;
      display: grid;
      place-items: center;
      border-radius: 10px;
      background: var(--lavender-light);
      color: var(--lavender-dark);
      font-weight: 900;
    }

    .example-row strong,
    .example-row small {
      display: block;
    }

    .example-row small {
      margin-top: 1px;
      color: var(--muted);
      font-size: .75rem;
    }

    .example-count {
      color: var(--lavender-dark);
      font-weight: 900;
      white-space: nowrap;
    }

    .example-caption {
      margin: 9px 4px 0 !important;
      color: var(--lavender-dark) !important;
      text-align: right;
      font-size: .82rem !important;
      font-weight: 800;
    }

    @media (min-width: 780px) {
      .screen-part,
      .count-example {
        width: min(100%, 650px);
        margin-inline: auto;
      }
    }
  </style>
</section>
