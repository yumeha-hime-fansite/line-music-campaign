<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';

  const rankingTabImage = `${base}/images/line-music/ranking-tab.png`;
</script>

<section class="content-section count-section" aria-labelledby="count-title">
  <div class="section-heading">
    <p class="eyebrow">CHECK</p>
    <h2 id="count-title">再生回数はここで確認できます</h2>
    <p>自分が何回聴いたかは、LINE MUSICの「自分の名前's Top 50」で確認できます。</p>
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

      <figure class="screen-part screen-part-wide">
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
          <h3>下へスクロールして「自分の名前's Top 50」を探す</h3>
          <p>ランキング画面を下へ進むと、自分のよく聴いている曲が並ぶ「Top 50」があります。</p>
        </div>
      </div>

      <div class="top50-mock" aria-label="User's Top 50の画面イメージ">
        <div class="mock-label">画面イメージ</div>
        <div class="mock-heading">
          <strong>あなたの名前's Top 50</strong>
          <span>過去3か月</span>
        </div>

        <div class="mock-song muted-row">
          <span class="mock-rank">1</span>
          <span class="mock-cover" aria-hidden="true">♪</span>
          <div class="mock-song-info">
            <strong>よく聴いている曲</strong>
            <small>アーティスト名</small>
          </div>
          <span class="mock-count">9,999+</span>
        </div>

        <div class="mock-song target-row">
          <span class="mock-rank">4</span>
          <span class="mock-cover target-cover" aria-hidden="true">♪</span>
          <div class="mock-song-info">
            <strong>{campaign.songTitle}</strong>
            <small>{campaign.artistName}</small>
          </div>
          <span class="mock-count target-count">○○回</span>
        </div>

        <div class="mock-callout">
          <span aria-hidden="true">↑</span>
          <strong>この数字があなたの再生回数です</strong>
        </div>
      </div>
    </article>

    <div class="count-result-card">
      <span aria-hidden="true">✓</span>
      <div>
        <strong>対象曲の右側の数字が増えていればOK</strong>
        <p>再生回数はリアルタイムではないので、すぐ増えなくても心配ありません。</p>
      </div>
    </div>
  </div>

  <div class="tip-card">
    <div class="tip-icon" aria-hidden="true">💡</div>
    <div>
      <h3>「自分の名前's Top 50」が出てこない？</h3>
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
      gap: 28px;
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

    .screen-part-wide {
      width: 100%;
    }

    .top50-mock {
      position: relative;
      overflow: hidden;
      padding: 18px;
      border: 1px solid #333;
      border-radius: 20px;
      background: #111;
      color: #fff;
      box-shadow: var(--shadow);
    }

    .mock-label {
      display: inline-block;
      margin-bottom: 12px;
      padding: 3px 9px;
      border-radius: 999px;
      background: rgba(255,255,255,.12);
      color: #cfcfcf;
      font-size: .7rem;
      font-weight: 800;
    }

    .mock-heading {
      display: grid;
      gap: 2px;
      margin-bottom: 14px;
    }

    .mock-heading strong {
      font-size: 1.15rem;
    }

    .mock-heading span {
      color: #aaa;
      font-size: .78rem;
    }

    .mock-song {
      display: grid;
      grid-template-columns: 24px 44px minmax(0, 1fr) auto;
      gap: 10px;
      align-items: center;
      padding: 11px 8px;
      border-radius: 12px;
    }

    .muted-row {
      opacity: .55;
    }

    .target-row {
      margin-top: 4px;
      border: 2px solid var(--lavender);
      background: rgba(141,108,200,.12);
    }

    .mock-rank {
      color: #ddd;
      font-weight: 800;
      text-align: center;
    }

    .mock-cover {
      width: 44px;
      height: 44px;
      display: grid;
      place-items: center;
      border-radius: 6px;
      background: #555;
      color: #ddd;
      font-weight: 900;
    }

    .target-cover {
      background: var(--lavender-dark);
      color: #fff;
    }

    .mock-song-info {
      min-width: 0;
      display: grid;
      gap: 1px;
    }

    .mock-song-info strong {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      font-size: .92rem;
    }

    .mock-song-info small {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      color: #aaa;
      font-size: .75rem;
    }

    .mock-count {
      white-space: nowrap;
      color: #ddd;
      font-size: .86rem;
    }

    .target-count {
      color: #fff;
      font-weight: 900;
    }

    .mock-callout {
      display: flex;
      justify-content: flex-end;
      gap: 7px;
      margin-top: 8px;
      color: #d9c9f5;
      font-size: .84rem;
    }

    .count-result-card {
      display: grid;
      grid-template-columns: 42px 1fr;
      gap: 12px;
      align-items: center;
      padding: 18px;
      border: 1px solid #d6ecdc;
      border-radius: 18px;
      background: var(--green-soft);
    }

    .count-result-card > span {
      width: 38px;
      height: 38px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: #fff;
      color: var(--green);
      font-weight: 900;
    }

    .count-result-card strong {
      color: var(--green);
    }

    .count-result-card p {
      margin: 3px 0 0;
      color: var(--muted);
      font-size: .9rem;
    }

    @media (min-width: 780px) {
      .screen-part-wide,
      .top50-mock {
        width: min(100%, 650px);
        margin-inline: auto;
      }
    }
  </style>
</section>
