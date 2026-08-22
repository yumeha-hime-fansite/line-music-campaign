# 夢羽ヒメ LINE MUSIC再生キャンペーン参加ガイド

SvelteKit + TypeScript + 通常CSSで作る、GitHub Pages向け静的サイトです。

## 運用方針

- `main` → 本番: `https://ユーザー名.github.io/リポジトリ名/`
- `develop` → 開発版: `https://ユーザー名.github.io/リポジトリ名/develop/`
- Microsoft Clarityは本番のみ有効
- 開発版は `noindex` + DEVELOPMENT表示
- キャンペーン差し替えは原則 `src/lib/data/campaign.ts` を修正

## 初回セットアップ

```bash
npm install
npm run dev
```

ローカルは環境変数未設定でも自動的に開発版扱いになります。必要なら `.env.example` を `.env` にコピーしてください。

## キャンペーン情報の変更

`src/lib/data/campaign.ts` を編集してください。

今回すでに設定している固定情報:

- 曲名: `mal d'amour`
- 終了: 2026年9月30日
- 総再生目標: 50万 / 70万 / 100万

特典内容は未確定のためプレースホルダーです。

画像の掲載許可が出た場合は `static/images/` に置き、例えば次のように設定します。

```ts
individualCampaignImage: '/images/individual.webp',
totalCampaignImage: '/images/total.webp'
```

画像が未設定でもカードUIだけで成立します。

## GitHub Pages

1. `main` と `develop` の両ブランチを作成してpush
2. GitHubの `Settings → Pages`
3. Sourceを **GitHub Actions** に設定

`.github/workflows/pages.yml` が両ブランチを別々のbase pathでビルドし、次の1サイトとして公開します。

```text
/               ← main
/develop/        ← develop
```

## Microsoft Clarity

GitHubリポジトリの `Settings → Secrets and variables → Actions` にRepository secretを追加します。

- Name: `CLARITY_PROJECT_ID`
- Value: Microsoft ClarityのProject ID

Actionsでは本番ビルドにだけ `PUBLIC_CLARITY_ID` を渡します。`develop` ではClarityを読み込みません。

## 公開前に設定するもの

- LINE MUSIC対象曲URL
- 公式キャンペーンURL
- 応募URL・応募期限
- 個人再生特典と必要回数
- 50万 / 70万 / 100万再生の各特典内容
- 掲載許可が出た場合のキャンペーン画像
- 必要ならOGP画像
- Clarity Project ID

## 今回あえて入れていないもの

初心者の参加ハードルを下げることを優先し、以下は初版から外しています。

- 複数端末による再生方法
- 長時間・大量再生のノウハウ
- 総再生数の現在値・進捗バー
- 再生数シミュレーター

将来的に「もっと応援したい人向け」の別ページへ分離する想定です。
