<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="content-section more-play-teaser" aria-labelledby="more-play-teaser-title">
  <div class="teaser-card">
    <div>
      <p class="eyebrow">MORE SUPPORT</p>
      <h2 id="more-play-teaser-title">もう少し聴いて応援してみたい人へ</h2>
      <p>
        1台での再生に慣れて、「もう少し続けてみようかな」と思ったときの参考に。
        長く流すときの確認ポイントや、1時間で何回くらい聴けるかの目安を別ページにまとめています。
      </p>
    </div>

    <a class="teaser-link" href={`${base}/more-play/`}>
      もう少し詳しく見る
      <span aria-hidden="true">→</span>
    </a>

    <p class="teaser-note">※一参加者として試したこと・調べたことをまとめた非公式ページです。</p>
  </div>
</section>

<style>
  .more-play-teaser { padding-top: 20px; padding-bottom: 20px; }
  .teaser-card {
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: 26px;
    background: linear-gradient(145deg, #f7f2fd, #fff);
    box-shadow: var(--shadow);
  }
  .teaser-card h2 { margin: 6px 0 10px; font-size: clamp(1.35rem, 5vw, 1.8rem); line-height: 1.4; }
  .teaser-card p { margin: 0; color: var(--muted); }
  .teaser-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    color: var(--lavender-dark);
    font-weight: 900;
    text-underline-offset: 4px;
  }
  .teaser-note { margin-top: 12px !important; font-size: .78rem; }
  @media (min-width: 780px) {
    .more-play-teaser { padding-top: 28px; padding-bottom: 28px; }
    .teaser-card { padding: 30px 32px; }
  }
</style>
