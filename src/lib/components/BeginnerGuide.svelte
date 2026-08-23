<script lang="ts">
  import { campaign } from '$lib/data/campaign';
  import PlayCTA from './PlayCTA.svelte';

  const appStoreUrl = 'https://apps.apple.com/jp/app/%E9%9F%B3%E6%A5%BD-line-music-%E6%9C%80%E6%96%B0%E3%81%AE%E6%AD%8C%E3%82%84%E6%9B%B2-%E3%83%9F%E3%83%A5%E3%83%BC%E3%82%B8%E3%83%83%E3%82%AF%E5%A4%9A%E6%95%B0/id966142320';
  const googlePlayUrl = 'https://play.google.com/store/apps/details?id=jp.linecorp.linemusic.android&hl=ja';
</script>

<section id="beginner-guide" class="content-section beginner-section" aria-labelledby="beginner-title">
  <div class="section-heading">
    <p class="eyebrow">FIRST TIME</p>
    <h2 id="beginner-title">LINE MUSICが初めての方へ</h2>
    <p>ここからは、上の3ステップを実際の操作順にもう少し詳しく見ていきます。</p>
  </div>

  <div class="mini-guide">
    <article>
      <span>1</span>
      <div>
        <h3>アプリを入れる</h3>
        <p>スマートフォンにLINE MUSICをインストールします。</p>
        <div class="store-links" aria-label="LINE MUSICアプリのダウンロード">
          <a href={appStoreUrl} target="_blank" rel="noopener noreferrer">App Store（iPhone / iPad）</a>
          <a href={googlePlayUrl} target="_blank" rel="noopener noreferrer">Google Play（Android）</a>
        </div>
      </div>
    </article>

    <article>
      <span>2</span>
      <div>
        <h3>LINEアカウントでログイン</h3>
        <p>普段使っているLINEアカウントでログインします。</p>
      </div>
    </article>

    <article>
      <span>3</span>
      <div>
        <h3>フル再生できるようにする</h3>
        <p>プラン未登録の状態ではフル再生できないため、フル再生できるプランへの登録が必要です。</p>
      </div>
    </article>

    <article>
      <span>4</span>
      <div>
        <h3>このページから対象曲を開く</h3>
        <p>検索せず、対象曲へのボタンから直接開けば迷いにくいです。</p>
      </div>
    </article>

    <article>
      <span>5</span>
      <div>
        <h3>最初から最後まで再生</h3>
        <p>あとは {campaign.songTitle} を楽しんで聴いてみよう。</p>
      </div>
    </article>
  </div>

  <PlayCTA label="ヒメさんの曲を聴いてみる" placement="beginner-play" />
</section>
