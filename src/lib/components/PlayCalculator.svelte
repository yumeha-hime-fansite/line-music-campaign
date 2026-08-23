<script lang="ts">
  import { campaign } from '$lib/data/campaign';

  const formatter = new Intl.NumberFormat('ja-JP');
  const hourPresets = [1, 4, 8, 12, 24];

  let hoursPerDay = 1;

  function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  }

  function normalizeHours() {
    hoursPerDay = clamp(Number(hoursPerDay), 0.25, 24);
  }

  function daysRemaining(endDate: string) {
    const now = new Date();
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const [y, m, d] = endDate.split('-').map(Number);
    const end = new Date(y, m - 1, d);
    const diff = Math.floor((end.getTime() - today.getTime()) / 86400000);
    return Math.max(0, diff + 1);
  }

  $: safeHours = clamp(Number(hoursPerDay), 0.25, 24);
  $: remainingDays = daysRemaining(campaign.campaignEndDate);
  $: playsPerHour = Math.floor(3600 / campaign.songDurationSeconds);
  $: playsPerDay = Math.floor((safeHours * 3600) / campaign.songDurationSeconds);
  $: totalPlays = Math.floor((remainingDays * safeHours * 3600) / campaign.songDurationSeconds);
</script>

<div class="calculator-card" aria-labelledby="calculator-title">
  <div class="calculator-heading">
    <p class="calculator-kicker">MINI CALCULATOR</p>
    <h3 id="calculator-title">今からでも、どれくらい聴ける？</h3>
    <p>
      {campaign.songTitle} を1台で流した場合の、シンプルな理論値です。
      「今から参加しても遅いかな？」と思ったときの目安に。
    </p>
  </div>

  <div class="quick-result">
    <div>
      <span>この曲は1時間で</span>
      <strong>約{formatter.format(playsPerHour)}回</strong>
    </div>
    <div>
      <span>キャンペーン終了まで</span>
      <strong>あと{formatter.format(remainingDays)}日</strong>
    </div>
  </div>

  <fieldset>
    <legend>1日にどれくらい聴く？</legend>
    <div class="preset-row">
      {#each hourPresets as preset}
        <button
          type="button"
          class:active={safeHours === preset}
          aria-pressed={safeHours === preset}
          onclick={() => (hoursPerDay = preset)}
        >
          {preset}時間
        </button>
      {/each}
    </div>

    <label class="number-field">
      <span>自由入力</span>
      <div>
        <input
          type="number"
          min="0.25"
          max="24"
          step="0.25"
          inputmode="decimal"
          bind:value={hoursPerDay}
          onblur={normalizeHours}
          aria-label="1日の再生時間"
        />
        <span>時間 / 日</span>
      </div>
    </label>
  </fieldset>

  <div class="calculator-result" aria-live="polite">
    <span>1日{safeHours}時間なら、1日あたり</span>
    <strong>約{formatter.format(playsPerDay)}回</strong>
    <span>{campaign.campaignPeriod}まで続けた理論値</span>
    <strong class="total">約{formatter.format(totalPlays)}回</strong>
  </div>

  <p class="calculator-message">
    この回数を目指す必要はありません。1回でも、できる範囲でも応援になります。
  </p>

  <p class="calculator-note">
    ※曲間の処理時間、再生停止、アプリ終了、通信状態などは考慮していない単純計算です。
    実際の再生回数とはズレることがあります。
  </p>
</div>

<style>
  .calculator-card {
    padding: 22px;
    border: 1px solid var(--line);
    border-radius: 26px;
    background: var(--surface);
    box-shadow: var(--shadow);
  }

  .calculator-heading { margin-bottom: 20px; }
  .calculator-kicker {
    margin: 0;
    color: var(--lavender-dark);
    font-size: .72rem;
    font-weight: 900;
    letter-spacing: .14em;
  }
  .calculator-heading h3 {
    margin: 5px 0 7px;
    font-size: clamp(1.35rem, 5vw, 1.8rem);
    line-height: 1.4;
  }
  .calculator-heading > p:last-child { margin: 0; color: var(--muted); font-size: .92rem; }

  .quick-result {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-bottom: 16px;
  }
  .quick-result > div {
    display: grid;
    gap: 3px;
    padding: 14px;
    border-radius: 16px;
    background: var(--surface-soft);
    text-align: center;
  }
  .quick-result span { color: var(--muted); font-size: .78rem; }
  .quick-result strong { color: var(--lavender-dark); font-size: 1.15rem; }

  fieldset {
    margin: 0;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface-soft);
  }
  legend { padding: 0 6px; font-weight: 900; font-size: .9rem; }

  .preset-row {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 12px;
  }
  .preset-row button {
    min-height: 38px;
    padding: 6px 11px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: var(--text);
    font: inherit;
    font-weight: 800;
    cursor: pointer;
  }
  .preset-row button.active {
    border-color: var(--lavender);
    background: var(--lavender-light);
    color: var(--lavender-dark);
  }

  .number-field { display: grid; gap: 5px; width: fit-content; }
  .number-field > span { color: var(--muted); font-size: .78rem; font-weight: 700; }
  .number-field > div { display: flex; align-items: center; gap: 8px; }
  .number-field input {
    width: 82px;
    min-height: 46px;
    padding: 8px 10px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #fff;
    color: var(--text);
    font: inherit;
    text-align: center;
    font-weight: 800;
  }

  .calculator-result {
    display: grid;
    gap: 4px;
    margin-top: 18px;
    padding: 22px 18px;
    border-radius: 22px;
    background: linear-gradient(145deg, #f1e9fb, #fff);
    text-align: center;
  }
  .calculator-result span { color: var(--muted); font-size: .86rem; }
  .calculator-result strong {
    color: var(--lavender-dark);
    font-size: clamp(1.55rem, 8vw, 2.5rem);
    line-height: 1.2;
  }
  .calculator-result .total {
    margin-top: 2px;
    font-size: clamp(2rem, 10vw, 3.2rem);
  }

  .calculator-message {
    margin: 14px 2px 0;
    padding: 12px 14px;
    border-radius: 14px;
    background: var(--green-soft);
    color: var(--green);
    font-size: .86rem;
    font-weight: 800;
    text-align: center;
  }
  .calculator-note {
    margin: 12px 2px 0;
    color: var(--muted);
    font-size: .76rem;
    line-height: 1.65;
  }

  button:focus-visible,
  input:focus-visible {
    outline: 3px solid var(--lavender-light);
    outline-offset: 2px;
  }

  @media (max-width: 420px) {
    .quick-result { grid-template-columns: 1fr; }
  }

  @media (min-width: 680px) {
    .calculator-card { padding: 28px; }
  }
</style>
