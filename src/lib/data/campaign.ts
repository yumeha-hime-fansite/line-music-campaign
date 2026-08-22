export type Reward = {
  plays?: number;
  title: string;
  description: string;
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
  songUrl: '',
  officialCampaignUrl: '',
  applicationUrl: '',
  applicationDeadline: '',

  // ヒメさんから掲載許可が出た場合に static/images 配下へ置き、
  // '/images/xxx.webp' のように指定してください。未設定なら非表示になります。
  individualCampaignImage: '',
  totalCampaignImage: '',

  individualRewards: [
    {
      title: '個人再生数プレゼント',
      description: '特典内容・必要再生回数を campaign.ts に設定してください。'
    }
  ] satisfies Reward[],

  totalMilestones: [
    {
      plays: 500_000,
      title: '50万再生達成',
      description: '50万再生時の特典内容を設定してください。'
    },
    {
      plays: 700_000,
      title: '70万再生達成',
      description: '70万再生時の特典内容を設定してください。'
    },
    {
      plays: 1_000_000,
      title: '100万再生達成',
      description: '100万再生時の特典内容を設定してください。'
    }
  ] satisfies Milestone[],

  prePlayNotice: '',
  playbackNotice: '',
  applicationNotice: '',

  // OGP画像を使う場合は /images/ogp.webp などを指定
  ogImage: ''
};
