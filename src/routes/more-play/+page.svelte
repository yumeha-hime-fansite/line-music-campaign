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
    { label: 'まず1台', href: '#stable-title' },
    { label: '再生数の目安', href: '#calculator-section' },
    { label: '余っている端末', href: '#device-title' },
    { label: '止まってない？', href: '#watch-title' },
    { label: 'PC利用', href: '#emulator-title' }
  ];
</script>

<svelte:head>
  <title>もう少し聴いて応援してみたい人へ｜LINE MUSIC再生キャンペーン</title>
  <meta
    name="description"
    content="LINE MUSIC再生キャンペーンでもう少し聴いて応援してみたい人向けに、一参加者として試したこと・調べたことをまとめた非公式ページです。"
  />
  <link rel="canonical" href={canonicalUrl} />
  <meta property="og:title" content="もう少し聴いて応援してみたい人へ｜LINE MUSIC再生キャンペーン" />
  <meta property="og:description" content="まずは今の1台を安定させるところから。自分のペースで続けたい人向けの参考ページです。" />
  <meta property="og:type" content="article" />
  <meta property="og:url" content={canonicalUrl} />
  {#if ogImage}<meta property="og:image" content={ogImage} />{/if}
</svelte:head>

<main class="more-play-page">
  <section class="subhero section-shell" aria-labelledby="more-play-title">
    <a class="back-link" href={`${base}/`}>← 基本の参加ガイドへ</a>
    <p class="eyebrow">MORE SUPPORT</p>
    <h1 id="more-play-title">もう少し聴いて<br /><span>応援してみたい人へ</span></h1>
    <p class="subhero-lead">
      1台での再生には慣れてきた。<br />
      「もう少し続けてみようかな」と思ったときに、自分が意識していることや
      調べたことをまとめています。
    </p>
    <p class="subhero-soft"><strong>今の1台のままでも、もちろん十分です。</strong></p>
  </section>

  <section class="content-section intro-section" aria-labelledby="about-title">
    <div class="notice-card">
      <p class="notice-label">このページについて</p>
      <h2 id="about-title">一参加者としての情報共有です</h2>
      <p>
        ここでは、自分で試したことや、LINE MUSIC公式の案内を見ながら知ったことをまとめています。
        公式に案内された方法ではないものもあるため、自分の環境ではこうだった、という一例として
        見てもらえたらと思います。
      </p>
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
      <h2 id="stable-title">まずは、今の1台を安定させる</h2>
      <p>長く流していると、気づかないうちに止まっていることもあります。</p>
    </div>

    <div class="check-card">
      <ul>
        <li><span aria-hidden="true">✓</span><div><strong>曲が再生中か</strong><p>いつの間にか停止していることがあります。</p></div></li>
        <li><span aria-hidden="true">✓</span><div><strong>アプリが動いているか</strong><p>LINE MUSIC自体が終了している場合もあります。</p></div></li>
        <li><span aria-hidden="true">✓</span><div><strong>たまに様子を見る</strong><p>「ずっと流していたつもり」を減らせます。</p></div></li>
      </ul>
    </div>

    <p class="personal-note">
      自分も、台数を増やすことより先に<strong>止まっている時間を減らすこと</strong>を意識しています。
    </p>
  </section>

  <section id="calculator-section" class="content-section calculator-section" aria-label="再生回数の目安">
    <PlayCalculator />
  </section>

  <section class="content-section" aria-labelledby="device-title">
    <div class="section-heading">
      <p class="eyebrow">SPARE DEVICE</p>
      <h2 id="device-title">余っているスマホを使う方法も</h2>
      <p>
        昔使っていたAndroidやiPhoneが手元にあれば、追加の再生端末として使う方法もあります。
        ここでは、自分が実際に試しているやり方をひとつの参考例として紹介します。
      </p>
    </div>

    <div class="experience-card">
      <p class="experience-label">自分の環境で試している方法</p>
      <ol class="device-steps">
        <li>
          <span>1</span>
          <div>
            <strong>対象曲を端末にダウンロード</strong>
            <p>LINE MUSICアプリで、再生したい曲をあらかじめ端末へ保存しておきます。</p>
          </div>
        </li>
        <li>
          <span>2</span>
          <div>
            <strong>オフライン状態で再生を開始</strong>
            <p>通信を切った状態で、ダウンロードした対象曲の再生を始めます。</p>
          </div>
        </li>
        <li>
          <span>3</span>
          <div>
            <strong>再生を始めたあと、オンラインへ戻す</strong>
            <p>自分の環境では、この流れで複数端末を使って再生できています。</p>
          </div>
        </li>
      </ol>
    </div>

    <div class="caution-card">
      <strong>あくまで実体験上の一例です</strong>
      <p>
        この方法はLINE MUSIC公式が複数端末での再生方法として案内しているものではありません。
        同じ環境で同じように動作することや、再生回数へ反映されることを保証するものでもありません。
        「余っている端末も使ってみたい」という人が、自分で調べたり試したりするときの参考として載せています。
      </p>
    </div>

    <div class="research-box">
      <p class="research-label">自分で調べるときのキーワード</p>
      <div class="keyword-list" aria-label="複数端末について調べるキーワード">
        <span>LINE MUSIC オフライン再生</span>
        <span>LINE MUSIC 複数端末</span>
        <span>LINE MUSIC 端末登録</span>
      </div>
      <a href={lineMusicDeviceHelpUrl} target="_blank" rel="noopener noreferrer">LINE MUSICの端末ヘルプを見る ↗</a>
    </div>
  </section>

  <section class="content-section" aria-labelledby="watch-title">
    <div class="section-heading">
      <p class="eyebrow">KEEP AN EYE</p>
      <h2 id="watch-title">長く流すなら、ときどき様子を見る</h2>
      <p>ずっと見張る必要はありませんが、途中で止まっていないかだけ確認すると安心です。</p>
    </div>

    <div class="stop-grid">
      <article><span aria-hidden="true">⏸</span><h3>曲が停止</h3><p>途中で再生が止まっている。</p></article>
      <article><span aria-hidden="true">×</span><h3>アプリが終了</h3><p>LINE MUSICが落ちている。</p></article>
      <article><span aria-hidden="true">…</span><h3>気づきにくい停止</h3><p>画面を見ていない間に止まっていることも。</p></article>
    </div>

    <p class="personal-note">
      たまに確認しておくと、「いつから止まってたんだ……」を減らせます。
    </p>
  </section>

  <section class="content-section" aria-labelledby="emulator-title">
    <div class="section-heading">
      <p class="eyebrow">PC / EMULATOR</p>
      <h2 id="emulator-title">PC・Androidエミュレータという方法も</h2>
      <p>
        スマホ以外では、PCからLINE MUSICを使う方法もあります。
        さらに一歩踏み込むと、PC上でAndroid環境を動かす「Androidエミュレータ」という選択肢もあります。
      </p>
    </div>

    <div class="reference-card emulator-card">
      <h3>Androidエミュレータとは？</h3>
      <p>
        Androidエミュレータは、スマートフォンのAndroid環境をPC上で仮想的に動かすソフトです。
        PCの画面上でAndroidアプリを起動でき、製品によっては複数のAndroid環境を同時に動かす
        「マルチインスタンス」という機能もあります。
      </p>
      <p>
        自分もLINE MUSICの再生用途でAndroidエミュレータを使ったことがあります。
        「余っているスマホはないけれどPCならある」という場合に、こういう方法もあると知っておくと
        調べるきっかけになると思います。
      </p>
    </div>

    <div class="emulator-points">
      <h3>使うなら知っておきたいこと</h3>
      <ul>
        <li>Androidエミュレータは、LINE MUSIC公式の動作保証環境として案内されているものではありません。</li>
        <li>複数のAndroid環境を動かすほど、PCのCPU・メモリなどへの負荷が大きくなります。</li>
        <li>長時間動かしていると、エミュレータやPC自体が止まることもあります。</li>
        <li>LINE MUSICやエミュレータ側のアップデートで、動作が変わる可能性もあります。</li>
      </ul>
    </div>

    <div class="research-box">
      <p class="research-label">自分で調べるときのキーワード</p>
      <div class="keyword-list" aria-label="Androidエミュレータについて調べるキーワード">
        <span>Android エミュレータ</span>
        <span>マルチインスタンス</span>
        <span>Android エミュレータ PC 負荷</span>
      </div>
    </div>
  </section>

  <section class="content-section closing-section" aria-labelledby="closing-title">
    <p class="eyebrow">AT YOUR PACE</p>
    <h2 id="closing-title">自分に合いそうなところだけ、参考に</h2>
    <p>
      今使っているスマホでそのまま続けるのも十分な応援です。
      「もう少し続けてみようかな」と思ったときに、使えそうなところだけ参考になればと思います。
    </p>
    <a class="back-button" href={`${base}/`}>← 基本の参加ガイドへ戻る</a>
  </section>

  <footer class="site-footer">
    <p>
      このサイトはファンによる非公式の参加ガイドです。
      LINE MUSICおよびアーティスト・関係各所の公式サイトではありません。
      正式なキャンペーン条件は、公式案内をご確認ください。
    </p>

    <div class="footer-notes">
      <p>
        ※掲載しているキャンペーン画像等は、関係各所より掲載許可を得たものを使用しています。
        無断転載・二次利用はご遠慮ください。
      </p>
      <p>
        ※掲載されている画像等の著作権・肖像権その他の権利は、それぞれの権利者に帰属します。
      </p>
    </div>

    <p class="footer-contact">
      お問い合わせ：
      <a href="mailto:amagase.sui@gmail.com">amagase.sui@gmail.com</a>
    </p>
  </footer>
</main>

<style>
  .more-play-page { overflow: hidden; }

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
  .subhero h1 {
    margin: 8px 0 18px;
    font-size: clamp(2rem, 9vw, 3.55rem);
    line-height: 1.25;
    letter-spacing: -.02em;
  }
  .subhero h1 span { color: var(--lavender-dark); }
  .subhero-lead { margin: 0; color: var(--muted); }
  .subhero-soft { margin: 18px 0 0; }

  .intro-section { padding-top: 18px; }

  .notice-card,
  .reference-card,
  .check-card,
  .experience-card,
  .caution-card,
  .research-box,
  .emulator-points {
    border-radius: 22px;
  }

  .notice-card {
    padding: 22px;
    border: 1px solid #e4d7f5;
    background: #f7f2fd;
  }
  .notice-label {
    margin: 0;
    color: var(--lavender-dark);
    font-size: .74rem;
    font-weight: 900;
    letter-spacing: .1em;
  }
  .notice-card h2 { margin: 5px 0 9px; font-size: 1.25rem; }
  .notice-card p { margin: 0; color: var(--muted); }

  .sub-quick-nav {
    margin-top: 8px;
    margin-bottom: -24px;
  }

  .check-card {
    padding: 18px;
    border: 1px solid var(--line);
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .check-card ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 12px;
  }
  .check-card li {
    display: grid;
    grid-template-columns: 34px 1fr;
    gap: 10px;
    align-items: start;
  }
  .check-card li > span {
    width: 30px;
    height: 30px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--green-soft);
    color: var(--green);
    font-weight: 900;
  }
  .check-card strong { display: block; }
  .check-card p { margin: 2px 0 0; color: var(--muted); font-size: .9rem; }

  .personal-note {
    margin: 18px 0 0;
    padding: 16px 18px;
    border-left: 4px solid var(--lavender-light);
    background: #faf8fd;
    color: var(--muted);
  }

  .calculator-section { width: min(100% - 24px, 860px); }

  .reference-card,
  .experience-card,
  .emulator-points {
    padding: 20px;
    border: 1px solid var(--line);
    background: var(--surface);
    box-shadow: var(--shadow);
  }
  .reference-card h3,
  .emulator-points h3 { margin-top: 0; }
  .reference-card p { color: var(--muted); }
  .reference-card a {
    color: var(--lavender-dark);
    font-weight: 800;
  }

  .experience-card {
    background: linear-gradient(145deg, #f7f2fd, #fff);
  }
  .experience-label {
    margin: 0 0 14px;
    color: var(--lavender-dark);
    font-size: .78rem;
    font-weight: 900;
    letter-spacing: .05em;
  }
  .device-steps {
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    gap: 16px;
  }
  .device-steps li {
    display: grid;
    grid-template-columns: 38px 1fr;
    gap: 12px;
    align-items: start;
  }
  .device-steps li > span {
    width: 36px;
    height: 36px;
    display: grid;
    place-items: center;
    border-radius: 50%;
    background: var(--lavender-dark);
    color: #fff;
    font-weight: 900;
  }
  .device-steps strong { display: block; margin-top: 5px; }
  .device-steps p { margin: 4px 0 0; color: var(--muted); font-size: .9rem; }

  .caution-card {
    margin-top: 14px;
    padding: 17px 18px;
    border: 1px solid #eadfbf;
    background: #fffaf0;
  }
  .caution-card strong { display: block; margin-bottom: 5px; }
  .caution-card p { margin: 0; color: var(--muted); font-size: .88rem; }

  .research-box {
    margin-top: 14px;
    padding: 17px 18px;
    background: var(--surface-soft);
  }
  .research-label {
    margin: 0 0 10px;
    color: var(--muted);
    font-size: .78rem;
    font-weight: 900;
  }
  .keyword-list {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }
  .keyword-list span {
    padding: 7px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    font-size: .78rem;
    font-weight: 800;
  }
  .research-box a {
    display: inline-block;
    margin-top: 12px;
    color: var(--lavender-dark);
    font-size: .86rem;
    font-weight: 800;
  }

  .stop-grid {
    display: grid;
    gap: 12px;
  }
  .stop-grid article {
    padding: 18px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface);
  }
  .stop-grid article > span { font-size: 1.35rem; }
  .stop-grid h3 { margin: 7px 0 4px; }
  .stop-grid p { margin: 0; color: var(--muted); font-size: .9rem; }

  .emulator-card { margin-bottom: 14px; }
  .emulator-points {
    box-shadow: none;
    background: var(--surface-soft);
  }
  .emulator-points ul {
    margin: 10px 0 0;
    padding-left: 1.25em;
    color: var(--muted);
  }
  .emulator-points li + li { margin-top: 8px; }

  .closing-section { text-align: center; }
  .closing-section h2 {
    margin: 6px 0 12px;
    font-size: clamp(1.6rem, 6vw, 2.3rem);
  }
  .closing-section > p:not(.eyebrow) { color: var(--muted); }
  .back-button {
    display: inline-flex;
    margin-top: 18px;
    padding: 12px 18px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: var(--lavender-dark);
    font-weight: 900;
    text-decoration: none;
  }

  @media (min-width: 680px) {
    .stop-grid { grid-template-columns: repeat(3, 1fr); }
  }
</style>
