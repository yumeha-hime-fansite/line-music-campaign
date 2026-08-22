<script lang="ts">
  import * as publicEnv from '$env/static/public';

  const env = publicEnv as Record<string, string | undefined>;
  const siteVariant = env.PUBLIC_SITE_VARIANT ?? 'develop';
</script>

{#if siteVariant === 'develop'}
  <div class="dev-banner" role="status">🛠 DEVELOPMENT VERSION</div>
{/if}
