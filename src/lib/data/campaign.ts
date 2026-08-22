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
  // LINE MUSIC上の対象曲そのもののURL
  songUrl: 'https://lin.ee/UrIsXn0',
  // 今回の再生キャンペーン公式告知ページ
  officialCampaignUrl: 'https://x.com/hime_yumeha/status/2090438524176851336?s=20',
  //特典応募フォームのURL
  applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLScS5L5WI8LA5uWGCdiUnAlvffLf2WMAJXJfIKU3-uhq2ly1tg/viewform?usp=send_form',
  //応募締切日
  applicationDeadline: '2026年10月3日',

  // ヒメさんから掲載許可が出た場合に static/images 配下へ置き、
  // '/images/xxx.webp' のように指定してください。未設定なら非表示になります。
  individualCampaignImage: '',
  totalCampaignImage: '',

  individualRewards: [
    {
      title: '個人再生数プレゼント',
      description: '500回再生スマホ用壁紙、1000回再生ジャケットデザインステッカー、5000回再生ジャケットデザイン缶バッジ、9999回再生コンプリート記念カード'
    }
  ] satisfies Reward[],

  totalMilestones: [
    {
      plays: 500_000,
      title: '50万再生達成',
      description: '『mal d\'amour』『彩光ーイリザシオンー』カラオケ実装決定'
    },
    {
      plays: 700_000,
      title: '70万再生達成',
      description: 'オリジナル楽曲制作決定'
    },
    {
      plays: 1_000_000,
      title: '100万再生達成',
      description: 'オリジナル楽曲MV制作決定'
    }
  ] satisfies Milestone[],

  prePlayNotice: '',
  playbackNotice: '',
  applicationNotice: '',

  // OGP画像を使う場合は /images/ogp.webp などを指定
  ogImage: ''
};
