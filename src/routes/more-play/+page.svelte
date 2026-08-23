<script lang="ts">
  import { base } from '$app/paths';
  import { campaign } from '$lib/data/campaign';
  import PlayCalculator from '$lib/components/PlayCalculator.svelte';
  import CompactQuickNav from '$lib/components/CompactQuickNav.svelte';

  const siteOrigin = 'https://yumeha-hime-fansite.github.io';
  const canonicalUrl = `${siteOrigin}${base}/more-play/`;
  const ogImage = campaign.ogImage ? `${siteOrigin}${base}${campaign.ogImage}` : '';
  const lineMusicDeviceHelpUrl = 'https://help2.line.me/LINEMusic/?contentId=20022053&lang=ja';
const morePlayNavItems = [
  { label: '1台を安定', href: '#stable-title' },
  { label: '複数スマホ', href: '#multi-title' },
  { label: '再生数計算', href: '#calculator-title' },
  { label: '止まってない？', href: '#watch-title' },
  { label: 'PC利用', href: '#emulator-title' }
];
</script>

<svelte:head>
  <title>もう少し再生に協力したい人へ｜LINE MUSIC再生キャンペーン</title>
  <meta
    name="description"
    content="LINE MUSIC再生キャンペーンでもう少し再生に協力したい方向けに、複数端末での再生など、一参加者として試したこと・知った方法をまとめた非公式ページです。"
  />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content="もう少し再生に協力したい人へ｜LINE MUSIC再生キャンペーン" />
  <meta property="og:description" content="余っているスマホも使ってみようかな、と思ったときの参考に。" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={canonicalUrl} />
  {#if ogImage}<meta property="og:image" content={ogImage} />{/if}
</svelte:head>

<main class="more-play-page">
  <section class="subhero section-shell" aria-labelledby="more-play-title">
    <a class="back-link" href={`${base}/`}>← 基本の参加ガイドへ</a>
    <p class="eyebrow">MORE SUPPORT</p>
    <h1 id="more-play-title">もう少し再生に<br /><span>協力してみたい人へ</span></h1>
    <p class="subhero-lead">
      1台での再生には慣れてきた。<br />
      「もう少し再生数を増やして、推しの応援に協力できないかな」と思ったときの参考に、
      自分が試していることや知った方法をまとめています。
    </p>
    <p class="subhero-soft"><strong>最初から何台も使う必要はありません。</strong></p>
  </section>

  <section class="content-section intro-section" aria-labelledby="about-title">
    <div class="notice-card">
      <p class="notice-label">このページについて</p>
      <h2 id="about-title">一参加者としての情報共有です</h2>
      <p>
        このページでは、自分で試した方法や、LINE MUSIC公式の動作保証外となる方法についても触れています。
        同じように動作することや、再生回数へ反映されることを保証するものではありません。
        今後の仕様変更などで使えなくなる可能性もあります。
      </p>
      <p><strong>試す場合は、あくまで自己責任でお願いします。</strong></p>
    </div>
  </section>

<div class="sub-quick-nav section-shell">
  <CompactQuickNav
    label="気になるところへ"
    ariaLabel="このページの案内"
    items={morePlayNavItems}
  />
</div>

  <section class="content-section" aria-labelledby="stable-title">
    <div class="section-heading">
      <p class="eyebrow">FIRST CHECK</p>
      <h2 id="stable-title">まずは、今の1台が止まっていないか確認</h2>
      <p>長時間流していると、気づかないうちに止まっていることもあります。</p>
    </div>

    <div class="check-card">
      <ul>
        <li><span aria-hidden="true">✓</span><div><strong>曲が再生中か</strong><p>いつの間にか停止していることがあります。</p></div></li>
        <li><span aria-hidden="true">✓</span><div><strong>アプリが動いているか</strong><p>LINE MUSIC自体が終了している場合もあります。</p></div></li>
        <li><span aria-hidden="true">✓</span><div><strong>たまに様子を見る</strong><p>「ずっと流していたつもり」を減らせます。</p></div></li>
      </ul>
    </div>

    <p class="personal-note">自分も、台数を増やすこと以上に<strong>止まっている時間を減らすこと</strong>は意識しています。</p>
  </section>

  <section class="content-section" aria-labelledby="multi-title">
    <div class="section-heading">
      <p class="eyebrow">MORE DEVICES</p>
      <h2 id="multi-title">余っているスマホがあれば、もう1台</h2>
      <p>昔使っていたAndroidやiPhoneが手元にあれば、追加の再生端末として使う方法もあります。</p>
    </div>

    <ol class="device-flow">
      <li>
        <span>01</span>
        <div><h3>対象曲をダウンロード</h3><p>使いたい端末に、対象曲をあらかじめ保存しておきます。</p></div>
      </li>
      <li>
        <span>02</span>
        <div><h3>オフライン状態で再生開始</h3><p>端末をオフライン状態にして、LINE MUSICで対象曲を再生します。</p></div>
      </li>
      <li>
        <span>03</span>
        <div><h3>再生後にオンラインへ戻す</h3><p>再生が始まったら、端末をオンライン状態へ戻します。</p></div>
      </li>
    </ol>

    <div class="experience-card">
      <p>
        自分の環境では、この方法で<strong>最大10台まで並行して動いたことがあります。</strong>
        ただし、LINE MUSIC公式が案内・保証している複数端末再生方法ではなく、
        同じ動作や再生回数への反映を保証するものでもありません。
      </p>
      <p>最初から10台という話ではなく、余っているスマホが1台あれば試してみる、くらいでも選択肢のひとつになると思います。</p>
    </div>

    <aside class="device-limit-card" aria-labelledby="device-limit-title">
      <div class="limit-icon" aria-hidden="true">!</div>
      <div>
        <h3 id="device-limit-title">端末を追加するときにひとつ注意</h3>
        <p>
          LINE MUSICで楽曲をダウンロードするには端末登録が必要です。
          現在のLINE MUSICヘルプでは、<strong>端末登録は1年間で10台まで、登録端末の削除は1年間で5回まで</strong>と案内されています。
          どちらも毎年1月1日にリセットされます。
        </p>
        <p>端末を入れ替えながら試す場合は、登録だけでなく削除回数の上限にも注意です。</p>
        <a href={lineMusicDeviceHelpUrl} target="_blank" rel="noopener noreferrer">LINE MUSICヘルプで確認する ↗</a>
      </div>
    </aside>
  </section>

  <section class="content-section calculator-section" aria-label="理論再生回数計算">
    <PlayCalculator />
  </section>

  <section class="content-section" aria-labelledby="watch-title">
    <div class="section-heading">
      <p class="eyebrow">KEEP AN EYE</p>
      <h2 id="watch-title">台数を増やしたら、ときどき様子を見る</h2>
      <p>「全部動いていると思ったら、何台か止まっていた」ということもあります。</p>
    </div>

    <div class="stop-grid">
      <article><span aria-hidden="true">⏸</span><h3>曲が停止</h3><p>途中で再生が止まっている。</p></article>
      <article><span aria-hidden="true">×</span><h3>アプリが終了</h3><p>LINE MUSICが落ちている。</p></article>
      <article><span aria-hidden="true">…</span><h3>一部だけ停止</h3><p>他の端末は動いていて気づきにくい。</p></article>
    </div>

    <p class="personal-note">
      ずっと見ている必要はありませんが、たまに確認しておくと「いつから止まってたんだ……」を減らせます。
      台数が増えるほど、この確認も意外と大事になってきます。
    </p>
  </section>

  <section class="content-section" aria-labelledby="emulator-title">
    <div class="section-heading">
      <p class="eyebrow">REFERENCE</p>
      <h2 id="emulator-title">PC＋Androidエミュレータという方法も</h2>
      <p>スマートフォンの実機以外の方法として、こうした利用例もあるようです。</p>
    </div>

    <div class="reference-card">
      <h3>Windows PC上でAndroid環境を動かす方法</h3>
      <p>
        Androidエミュレータを使い、PC上でLINE MUSICを利用する方法もあるようです。
        ただし、AndroidエミュレータはLINE MUSIC公式の動作保証環境として案内されていません。
      </p>
      <ul>
        <li>安定して動き続けること</li>
        <li>再生回数へ反映されること</li>
        <li>今後も同じように利用できること</li>
      </ul>
      <p>
        いずれも保証されません。LINE MUSICやエミュレータ側のアップデート・仕様変更などで
        利用できなくなる可能性もあります。
      </p>
      <p class="reference-note">こういう方法もある、くらいの参考情報として載せています。</p>
    </div>
  </section>

  <section class="content-section closing-section" aria-labelledby="closing-title">
    <p class="eyebrow">AT YOUR PACE</p>
    <h2 id="closing-title">自分に合いそうなところだけ、参考に</h2>
    <p>
      今使っているスマホで続けるのも、余っている端末をもう1台使ってみるのも。
      「もう少し再生してみようかな」と思ったときの参考になれば、くらいの気持ちでまとめています。
    </p>
    <a class="back-button" href={`${base}/`}>← 基本の再生方法へ戻る</a>
  </section>

  <footer class="site-footer">
    <p>このページはファンによる非公式の情報共有ページです。</p>
  </footer>
</main>

<style>
  .more-play-page {
    overflow: hidden;
  }

  .subhero {
    position: relative;
    padding: 54px 0 42px;
  }

  .subhero::before {
    content: "";
    position: absolute;
    z-index: -1;
    width: 240px;
    height: 240px;
    top: 35px;
    right: -120px;
    border-radius: 50%;
    background: #eee6fb;
  }

  .back-link {
    display: inline-block;
    margin-bottom: 34px;
    color: var(--muted);
    font-size: .86rem;
    font-weight: 800;
    text-decoration: none;
  }

  .back-link:hover {
    color: var(--lavender-dark);
  }

  .subhero h1 {
    margin: 8px 0 18px;
    font-size: clamp(2rem, 9vw, 3.55rem);
    line-height: 1.25;
    letter-spacing: -.02em;
  }

  .subhero h1 span {
    color: var(--lavender-dark);
  }

  .subhero-lead {
    margin: 0;
    color: var(--muted);
  }

  .subhero-soft {
    margin: 18px 0 0;
  }

  .intro-section {
    padding-top: 18px;
  }

  .notice-card,
  .experience-card,
  .reference-card,
  .check-card {
    border-radius: 22px;
  }

  .notice-card {
    padding: 22px;
    border: 1px solid #f1df9b;
    background: var(--yellow-soft);
  }

  .notice-label {
    margin: 0;
    color: #80661a;
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .1em;
  }

  .notice-card h2 {
    margin: 5px 0 9px;
    font-size: 1.25rem;
  }

  .notice-card p {
    margin: 0;
  }

  .notice-card p + p {
    margin-top: 10px;
  }

  .check-card {
    padding: 20px;
    border: 1px solid var(--line);
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .check-card ul {
    display: grid;
    gap: 16px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .check-card li {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 10px;
    align-items: start;
  }

  .check-card li > span {
    width: 32px;
    height: 32px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--green-soft);
    color: var(--green);
    font-weight: 900;
  }

  .check-card strong {
    display: block;
  }

  .check-card p {
    margin: 2px 0 0;
    color: var(--muted);
    font-size: .9rem;
  }

  .personal-note {
    margin: 16px 2px 0;
    color: var(--muted);
    font-size: .92rem;
  }

  .personal-note strong {
    color: var(--text);
  }

  .device-flow {
    display: grid;
    gap: 12px;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .device-flow li {
    display: grid;
    grid-template-columns: 48px 1fr;
    gap: 12px;
    padding: 17px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface);
  }

  .device-flow li > span {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border-radius: 14px;
    background: var(--lavender-light);
    color: var(--lavender-dark);
    font-size: .82rem;
    font-weight: 900;
  }

  .device-flow h3,
  .device-flow p {
    margin: 0;
  }

  .device-flow h3 {
    font-size: 1rem;
  }

  .device-flow p {
    margin-top: 3px;
    color: var(--muted);
    font-size: .9rem;
  }

  .experience-card {
    margin-top: 16px;
    padding: 20px;
    border: 1px solid var(--line);
    background: var(--surface-soft);
  }

  .experience-card p {
    margin: 0;
  }

  .experience-card p + p {
    margin-top: 10px;
  }

  .device-limit-card {
    display: grid;
    grid-template-columns: 42px 1fr;
    gap: 12px;
    margin-top: 16px;
    padding: 18px;
    border: 1px solid #f1df9b;
    border-radius: 20px;
    background: var(--yellow-soft);
  }

  .limit-icon {
    width: 38px;
    height: 38px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: #fff;
    color: #80661a;
    font-weight: 900;
  }

  .device-limit-card h3 {
    margin: 1px 0 7px;
    font-size: 1rem;
  }

  .device-limit-card p {
    margin: 0;
    font-size: .9rem;
  }

  .device-limit-card p + p {
    margin-top: 8px;
  }

  .device-limit-card a {
    display: inline-block;
    margin-top: 9px;
    color: var(--lavender-dark);
    font-size: .82rem;
    font-weight: 800;
  }

  .calculator-section {
    width: min(100% - 24px, 860px);
  }

  .stop-grid {
    display: grid;
    gap: 10px;
  }

  .stop-grid article {
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface);
  }

  .stop-grid article > span {
    width: 34px;
    height: 34px;
    display: grid;
    place-items: center;
    margin-bottom: 8px;
    border-radius: 50%;
    background: var(--surface-soft);
    color: var(--lavender-dark);
    font-weight: 900;
  }

  .stop-grid h3,
  .stop-grid p {
    margin: 0;
  }

  .stop-grid p {
    margin-top: 3px;
    color: var(--muted);
    font-size: .88rem;
  }

  .reference-card {
    padding: 22px;
    border: 1px solid #dce7f5;
    background: #f4f8ff;
  }

  .reference-card h3 {
    margin-top: 0;
  }

  .reference-card ul {
    padding-left: 1.2em;
  }

  .reference-note {
    margin-bottom: 0;
    padding-top: 12px;
    border-top: 1px solid #dce7f5;
    color: var(--muted);
    font-size: .88rem;
  }

  .closing-section {
    padding-bottom: 46px;
    text-align: center;
  }

  .closing-section h2 {
    margin: 6px 0 12px;
    font-size: clamp(1.65rem, 6vw, 2.35rem);
    line-height: 1.35;
  }

  .closing-section > p:not(.eyebrow) {
    margin: 0 auto;
    max-width: 620px;
    color: var(--muted);
  }

  .back-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 50px;
    margin-top: 24px;
    padding: 11px 20px;
    border: 1px solid var(--lavender-light);
    border-radius: 999px;
    background: #fff;
    color: var(--lavender-dark);
    font-weight: 900;
    text-decoration: none;
  }

  @media (min-width: 680px) {
    .stop-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (min-width: 780px) {
    .subhero {
      padding-top: 72px;
      padding-bottom: 58px;
    }

    .intro-section {
      padding-top: 24px;
    }

    .notice-card,
    .reference-card {
      padding: 26px;
    }

    .device-flow {
      grid-template-columns: repeat(3, 1fr);
    }

    .device-flow li {
      grid-template-columns: 1fr;
    }
  }
.sub-quick-nav {
  margin-top: -38px;
  margin-bottom: -28px;
}
</style>
