<script lang="ts">
  import { onMount } from 'svelte';
  import * as publicEnv from '$env/static/public';

  const env = publicEnv as Record<string, string | undefined>;
  const siteVariant = env.PUBLIC_SITE_VARIANT ?? 'develop';

  // Microsoft Clarity project ID
  const clarityId = 'y73vjioiin';

  onMount(() => {
    // developプレビューでは解析しない
    if (siteVariant !== 'production') return;

    // 二重読み込み防止
    if (document.querySelector('script[data-clarity-loader]')) return;

    const win = window as typeof window & {
      clarity?: (...args: unknown[]) => void;
    };

    if (!win.clarity) {
      const clarity = (...args: unknown[]) => {
        const queueTarget = clarity as typeof clarity & { q?: unknown[][] };
        (queueTarget.q ||= []).push(args);
      };

      win.clarity = clarity;
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.clarity.ms/tag/${clarityId}`;
    script.dataset.clarityLoader = 'true';
    document.head.appendChild(script);
  });
</script>
