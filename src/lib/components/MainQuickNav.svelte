<script lang="ts">
  import { base } from '$app/paths';
  import CompactQuickNav from './CompactQuickNav.svelte';

  const items = [
    { label: 'はじめ方', href: '#beginner-title' },
    { label: '再生回数', href: '#count-title' },
    { label: '再生のポイント', href: '#rules-title' },
    { label: '応募', href: '#application-title' },
    { label: 'FAQ', href: '#faq-title' },
    { label: 'もう少し応援', href: `${base}/more-play/` }
  ];
</script>

<div class="main-quick-nav section-shell">
  <CompactQuickNav label="知りたいところへ" ariaLabel="メインページの案内" {items} />
</div>

<style>
  .main-quick-nav {
    position: relative;
    z-index: 2;
    margin-top: -42px;
    margin-bottom: -34px;
  }

  @media (min-width: 780px) {
    .main-quick-nav {
      margin-top: -54px;
      margin-bottom: -42px;
    }
  }
</style>
