<script lang="ts">
  export type QuickNavItem = {
    label: string;
    href: string;
  };

  export let label = '気になるところへ';
  export let ariaLabel = 'ページ内の案内';
  export let items: QuickNavItem[] = [];
</script>

<nav class="quick-nav" aria-label={ariaLabel}>
  <p class="quick-nav-label">{label}</p>

  <div class="quick-nav-items">
    {#each items as item}
      <a href={item.href}>{item.label}</a>
    {/each}
  </div>
</nav>

<style>
  .quick-nav { min-width: 0; }
  .quick-nav-label {
    margin: 0 0 7px;
    color: var(--muted);
    font-size: .74rem;
    font-weight: 800;
  }

  .quick-nav-items {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
  }

  .quick-nav-items a {
    min-height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 7px 12px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: rgba(255,255,255,.82);
    color: var(--lavender-dark);
    font-size: .82rem;
    font-weight: 800;
    line-height: 1.2;
    text-decoration: none;
    transition: background .16s ease, border-color .16s ease, transform .16s ease;
  }

  .quick-nav-items a:hover {
    border-color: var(--lavender-light);
    background: var(--surface-soft);
    transform: translateY(-1px);
  }

  .quick-nav-items a:focus-visible {
    outline: 3px solid var(--lavender-light);
    outline-offset: 2px;
  }

  @media (prefers-reduced-motion: reduce) {
    .quick-nav-items a { transition: none; }
  }
</style>
