export type Reward = {
  plays?: number;
  title: string;
  description?: string;
};

export type Milestone = {
  plays: number;
  title: string;
  description: string;
};

export const campaign = {
  artistName: '夢羽ヒメ',
  songTitle: "mal d'amour",
  campaignPeriod: '2026年9月30日まで',

  // 次回キャンペーン時は、原則ここを差し替えればOKです。
  // LINE MUSIC上の対象曲そのもののURL
  songUrl: 'https://lin.ee/UrIsXn0',
  // 今回の再生キャンペーン公式告知ページ
  officialCampaignUrl: 'https://x.com/hime_yumeha/status/2090438524176851336?s=20',
  // 特典応募フォームのURL
  applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScS5L5WI8LA5uWGCdiUnAlvffLf2WMAJXJfIKU3-uhq2ly1tg/viewform?usp=send_form',
  // 応募締切日
  applicationDeadline: '2026年10月3日',

  // ヒメさんから掲載許可が出た場合に static/images 配下へ置き、
  // '/images/xxx.webp' のように指定してください。未設定なら非表示になります。
  individualCampaignImage: '',
  totalCampaignImage: '',

  individualRewards: [
    {
      plays: 500,
      title: 'スマホ用壁紙'
    },
    {
      plays: 1_000,
      title: 'ジャケットデザインステッカー'
    },
    {
      plays: 5_000,
      title: 'ジャケットデザイン缶バッジ'
    },
    {
      plays: 9_999,
      title: 'コンプリート記念カード'
    }
  ] satisfies Reward[],

  totalMilestones: [
    {
      plays: 500_000,
      title: '2曲のカラオケ実装決定',
      description: '「mal d\'amour」「彩光ーイリザシオンー」'
    },
    {
      plays: 700_000,
      title: 'オリジナル楽曲制作決定',
      description: 'みんなの再生が、新しい楽曲につながります。'
    },
    {
      plays: 1_000_000,
      title: 'オリジナル楽曲MV制作決定',
      description: '100万再生達成でMV制作が決定します。'
    }
  ] satisfies Milestone[],

  prePlayNotice: '',
  playbackNotice: '',
  applicationNotice: '',

  // OGP画像を使う場合は /images/ogp.webp などを指定
  ogImage: ''
};
