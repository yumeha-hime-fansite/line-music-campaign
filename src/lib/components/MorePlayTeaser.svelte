<script lang="ts">
  import { base } from '$app/paths';
</script>

<section class="content-section more-play-teaser" aria-labelledby="more-play-teaser-title">
  <div class="teaser-card">
    <div>
      <p class="eyebrow">MORE SUPPORT</p>
      <h2 id="more-play-teaser-title">もう少し再生に協力してみたい方へ</h2>
      <p>
        1台での再生に慣れて、「余っているスマホも使ってみようかな」と思ったときの参考に。
        複数端末など、一歩踏み込んだ方法を別ページにまとめています。
      </p>
    </div>

    <a class="teaser-link" href={`${base}/more-play/`}>
      もう少し再生する方法を見る
      <span aria-hidden="true">→</span>
    </a>

    <p class="teaser-note">※公式の動作保証外となる方法も含みます。</p>
  </div>
</section>

<style>
  .more-play-teaser {
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .teaser-card {
    padding: 24px;
    border: 1px solid var(--line);
    border-radius: 26px;
    background: linear-gradient(145deg, #f7f2fd, #fff);
    box-shadow: var(--shadow);
  }

  .teaser-card h2 {
    margin: 6px 0 10px;
    font-size: clamp(1.35rem, 5vw, 1.8rem);
    line-height: 1.4;
  }

  .teaser-card p {
    margin: 0;
    color: var(--muted);
  }

  .teaser-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-top: 18px;
    color: var(--lavender-dark);
    font-weight: 900;
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
  }

  .teaser-link span {
    transition: transform .16s ease;
  }

  .teaser-link:hover span {
    transform: translateX(3px);
  }

  .teaser-note {
    margin-top: 12px !important;
    font-size: .78rem;
  }

  @media (min-width: 780px) {
    .more-play-teaser {
      padding-top: 28px;
      padding-bottom: 28px;
    }

    .teaser-card {
      padding: 30px 32px;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .teaser-link span {
      transition: none;
    }
  }
</style>
