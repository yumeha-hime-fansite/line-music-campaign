<script lang="ts">
  import { campaign } from '$lib/data/campaign';
  import PlayCTA from './PlayCTA.svelte';
</script>

<section class="content-section" aria-labelledby="beginner-title">
  <div class="section-heading">
    <p class="eyebrow">FIRST TIME</p>
    <h2 id="beginner-title">はじめてのLINE MUSICでも大丈夫</h2>
    <p>参加までを順番に進めればOKです。</p>
  </div>

  <div class="mini-guide">
    <article><span>1</span><div><h3>アプリを入れる</h3><p>スマートフォンにLINE MUSICをインストールします。</p></div></article>
    <article><span>2</span><div><h3>LINEアカウントでログイン</h3><p>普段使っているLINEアカウントでログインします。</p></div></article>
    <article><span>3</span><div><h3>フル再生できる状態にする</h3><p>キャンペーン条件に合ったプランを利用します。</p></div></article>
    <article><span>4</span><div><h3>このページから対象曲を開く</h3><p>検索するより、対象曲リンクから直接開くのが迷いません。</p></div></article>
    <article><span>5</span><div><h3>最初から最後まで再生</h3><p>あとは {campaign.songTitle} を楽しんで聴いてみよう。</p></div></article>
  </div>

  <PlayCTA label="ヒメさんの曲を聴いてみる" placement="beginner-play" />
</section>
