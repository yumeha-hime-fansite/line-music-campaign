<script lang="ts">
  const faqs = [
    {
      q: '再生回数はいつ増える？',
      a: 'リアルタイムではありません。基本的に翌日・1日1回のタイミングでUser\'s TOP50が更新されます。'
    },
    {
      q: "User's TOP50が表示されない",
      a: '直近3か月に異なる20曲以上を再生したか確認してみてください。同じ1曲を20回では条件を満たしません。'
    },
    {
      q: 'ミュート・音量0でも大丈夫？',
      a: 'ミュートや音量0でのカウント条件は、公式に明確な保証が確認できないため断定できません。確実性を優先するなら、音が出る状態でフル再生し、翌日にUser\'s TOP50への反映を確認するのがおすすめです。'
    },
    {
      q: '思ったより再生回数が増えていない',
      a: 'まず翌日まで待ち、対象曲が合っているか、途中で再生が止まっていなかったか、フル再生できていたかを確認してみてください。'
    }
  ];
</script>

<section class="content-section faq-section" aria-labelledby="faq-title">
  <div class="section-heading">
    <p class="eyebrow">FAQ</p>
    <h2 id="faq-title">困ったときは</h2>
    <p>気になるところだけ開いて確認できます。</p>
  </div>

  <div class="faq-list">
    {#each faqs as faq}
      <details>
        <summary>{faq.q}<span aria-hidden="true">＋</span></summary>
        <div><p>{faq.a}</p></div>
      </details>
    {/each}
  </div>
</section>
