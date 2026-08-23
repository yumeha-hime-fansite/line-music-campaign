<script lang="ts">
  const formatter = new Intl.NumberFormat('ja-JP');

  let minutes = 3;
  let seconds = 1;
  let hours = 8;
  let devices = 2;

  const hourPresets = [1, 4, 8, 12, 24];

  function clamp(value: number, min: number, max: number) {
    return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
  }

  function normalizeDuration() {
    minutes = clamp(Number(minutes), 0, 59);
    seconds = clamp(Number(seconds), 0, 59);
    if (minutes === 0 && seconds === 0) seconds = 1;
  }

  function normalizeHours() {
    hours = clamp(Number(hours), 1, 24);
  }

  function normalizeDevices() {
    devices = clamp(Number(devices), 1, 10);
  }

  function changeDevices(delta: number) {
    devices = clamp(devices + delta, 1, 10);
  }

  $: songSeconds = Math.max(1, Number(minutes || 0) * 60 + Number(seconds || 0));
  $: safeHours = clamp(Number(hours), 1, 24);
  $: safeDevices = clamp(Number(devices), 1, 10);
  $: playsPerDevice = Math.floor((safeHours * 60 * 60) / songSeconds);
  $: totalPlays = playsPerDevice * safeDevices;
</script>

<div class="calculator-card" aria-labelledby="calculator-title">
  <div class="calculator-heading">
    <p class="calculator-kicker">MINI CALCULATOR</p>
    <h3 id="calculator-title">1台増えると、どれくらい変わる？</h3>
    <p>曲の長さ・再生時間・端末数から、途切れず再生できた場合の単純な理論値を計算します。</p>
  </div>

  <div class="calculator-inputs">
    <fieldset>
      <legend>曲の長さ</legend>
      <div class="duration-inputs">
        <label>
          <span>分</span>
          <input
            type="number"
            min="0"
            max="59"
            inputmode="numeric"
            bind:value={minutes}
            onblur={normalizeDuration}
            aria-label="曲の長さ（分）"
          />
        </label>
        <span class="duration-separator">:</span>
        <label>
          <span>秒</span>
          <input
            type="number"
            min="0"
            max="59"
            inputmode="numeric"
            bind:value={seconds}
            onblur={normalizeDuration}
            aria-label="曲の長さ（秒）"
          />
        </label>
      </div>
    </fieldset>

    <fieldset>
      <legend>1日の再生時間</legend>
      <div class="preset-row" aria-label="再生時間のプリセット">
        {#each hourPresets as preset}
          <button
            type="button"
            class:active={safeHours === preset}
            aria-pressed={safeHours === preset}
            onclick={() => (hours = preset)}
          >
            {preset}h
          </button>
        {/each}
      </div>
      <label class="number-field">
        <span>自由入力</span>
        <div>
          <input
            type="number"
            min="1"
            max="24"
            inputmode="numeric"
            bind:value={hours}
            onblur={normalizeHours}
            aria-label="1日の再生時間"
          />
          <span>時間</span>
        </div>
      </label>
    </fieldset>

    <fieldset>
      <legend>端末数</legend>
      <div class="device-stepper">
        <button
          type="button"
          onclick={() => changeDevices(-1)}
          disabled={safeDevices <= 1}
          aria-label="端末を1台減らす"
        >−</button>
        <label>
          <span class="sr-only">端末数</span>
          <input
            type="number"
            min="1"
            max="10"
            inputmode="numeric"
            bind:value={devices}
            onblur={normalizeDevices}
            aria-label="端末数"
          />
        </label>
        <span>台</span>
        <button
          type="button"
          onclick={() => changeDevices(1)}
          disabled={safeDevices >= 10}
          aria-label="端末を1台増やす"
        >＋</button>
      </div>
    </fieldset>
  </div>

  <div class="calculator-result" aria-live="polite">
    <span>{safeDevices}台 × {safeHours}時間の場合</span>
    <strong>約{formatter.format(totalPlays)}回</strong>
    <small>1台あたり 約{formatter.format(playsPerDevice)}回</small>

    {#if safeDevices < 10}
      <div class="plus-one">
        <span>もう1台増やすと</span>
        <strong>＋約{formatter.format(playsPerDevice)}回</strong>
      </div>
    {/if}
  </div>

  <p class="calculator-note">
    ※曲間の処理時間、再生停止、アプリ終了、通信状態などは考慮していません。実際の再生回数とはズレることがあります。
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

  .calculator-heading {
    margin-bottom: 22px;
  }

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

  .calculator-heading > p:last-child {
    margin: 0;
    color: var(--muted);
    font-size: .92rem;
  }

  .calculator-inputs {
    display: grid;
    gap: 14px;
  }

  fieldset {
    min-width: 0;
    margin: 0;
    padding: 16px;
    border: 1px solid var(--line);
    border-radius: 18px;
    background: var(--surface-soft);
  }

  legend {
    padding: 0 6px;
    font-weight: 900;
    font-size: .9rem;
  }

  input,
  button {
    font: inherit;
  }

  input {
    width: 72px;
    min-height: 46px;
    padding: 8px 10px;
    border: 1px solid var(--line);
    border-radius: 12px;
    background: #fff;
    color: var(--text);
    text-align: center;
    font-weight: 800;
  }

  input:focus-visible,
  button:focus-visible {
    outline: 3px solid var(--lavender-light);
    outline-offset: 2px;
  }

  .duration-inputs {
    display: flex;
    align-items: end;
    gap: 8px;
  }

  .duration-inputs label {
    display: grid;
    gap: 5px;
  }

  .duration-inputs label > span,
  .number-field > span {
    color: var(--muted);
    font-size: .78rem;
    font-weight: 700;
  }

  .duration-separator {
    padding-bottom: 10px;
    color: var(--lavender-dark);
    font-size: 1.3rem;
    font-weight: 900;
  }

  .preset-row {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin-bottom: 12px;
  }

  .preset-row button {
    min-width: 48px;
    min-height: 38px;
    padding: 6px 10px;
    border: 1px solid var(--line);
    border-radius: 999px;
    background: #fff;
    color: var(--text);
    font-weight: 800;
    cursor: pointer;
  }

  .preset-row button.active {
    border-color: var(--lavender);
    background: var(--lavender-light);
    color: var(--lavender-dark);
  }

  .number-field {
    display: grid;
    gap: 5px;
    width: fit-content;
  }

  .number-field > div {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .device-stepper {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .device-stepper button {
    width: 44px;
    height: 44px;
    border: 1px solid var(--lavender-light);
    border-radius: 50%;
    background: #fff;
    color: var(--lavender-dark);
    font-size: 1.3rem;
    font-weight: 900;
    cursor: pointer;
  }

  .device-stepper button:disabled {
    opacity: .38;
    cursor: default;
  }

  .device-stepper input {
    width: 64px;
  }

  .calculator-result {
    display: grid;
    gap: 3px;
    margin-top: 18px;
    padding: 22px 18px;
    border-radius: 22px;
    background: linear-gradient(145deg, #f1e9fb, #fff);
    text-align: center;
  }

  .calculator-result > span,
  .calculator-result > small {
    color: var(--muted);
  }

  .calculator-result > strong {
    color: var(--lavender-dark);
    font-size: clamp(2rem, 10vw, 3.2rem);
    line-height: 1.2;
  }

  .plus-one {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 5px 10px;
    margin-top: 13px;
    padding-top: 13px;
    border-top: 1px solid var(--lavender-light);
    font-size: .92rem;
  }

  .plus-one strong {
    color: var(--green);
  }

  .calculator-note {
    margin: 12px 2px 0;
    color: var(--muted);
    font-size: .76rem;
    line-height: 1.65;
  }

  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  @media (min-width: 680px) {
    .calculator-card {
      padding: 28px;
    }

    .calculator-inputs {
      grid-template-columns: 1fr 1.25fr 1fr;
      align-items: stretch;
    }

    fieldset {
      padding: 18px;
    }
  }
</style>
