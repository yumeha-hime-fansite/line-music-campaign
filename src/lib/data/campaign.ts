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

  // 計算機などで使うための機械可読データ
  campaignEndDate: '2026-09-30',
  songDurationSeconds: 181,

  songUrl: 'https://lin.ee/UrIsXn0',
  officialCampaignUrl: 'https://x.com/hime_yumeha/status/2090438524176851336?s=20',
  applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScS5L5WI8LA5uWGCdiUnAlvffLf2WMAJXJfIKU3-uhq2ly1tg/viewform?usp=send_form',
  applicationDeadline: '2026年10月3日',

  individualCampaignImage: '/images/linemusic_campagin.jpeg',
  totalCampaignImage: '/images/linemusic_campagin_target.jpeg',

  individualRewards: [
    { plays: 500, title: 'スマホ用壁紙' },
    { plays: 1_000, title: 'ジャケットデザインステッカー' },
    { plays: 5_000, title: 'ジャケットデザイン缶バッジ' },
    { plays: 9_999, title: 'コンプリート記念カード' }
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

  ogImage: '/images/linemusic_campagin.jpeg'
};
