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
  songTitle: 'Cherish',
  campaignPeriod: '2026年11月30日',
  campaignPeriodDisplay: '2026年10月4日〜11月30日',

  // 1曲4分45秒。シミュレーターで使う理論上の再生時間。
  campaignEndDate: '2026-11-30',
  songDurationSeconds: 285,

  // 以下3つは今回の公式リンク確認後に設定。過去の楽曲・応募先へ誤誘導しない。
  songUrl: 'https://lin.ee/WaEMEcZ',
  officialCampaignUrl: 'https://x.com/hime_yumeha/status/2105942671705686298',
  applicationUrl: 'https://accounts.google.com/v3/signin/identifier?continue=https://docs.google.com/forms/d/e/1FAIpQLSeEht4WzRPu3vOgCnvaYExgY8Cj3sB_Qe0uW9mW3Ibe123foQ/viewform?usp%3Dsend_form&followup=https://docs.google.com/forms/d/e/1FAIpQLSeEht4WzRPu3vOgCnvaYExgY8Cj3sB_Qe0uW9mW3Ibe123foQ/viewform?usp%3Dsend_form&ltmpl=forms&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&dsh=S1040432656:1791465945257242',
  artistXUrl: 'https://x.com/hime_yumeha',
  applicationDeadline: '2026年12月3日 23:59',

  individualCampaignImage: '/images/cherish_individual.jpg',
  totalCampaignImage: '/images/cherish_total.jpg',

  individualRewards: [
    { plays: 1_000, title: 'ジャケットデザインステッカー' },
    { plays: 5_000, title: 'ジャケットデザイン缶バッジ' },
    { plays: 7_000, title: 'ふわふわハンドタオル♡' },
    { plays: 9_999, title: 'コンプリート記念カード♡' }
  ] satisfies Reward[],

  totalMilestones: [
    {
      plays: 100_000,
      title: '待ち受け画像を全員にプレゼント',
      description: '総再生10万回達成で、待ち受け画像プレゼント。'
    },
    {
      plays: 300_000,
      title: 'カラオケ実装決定！',
      description: '総再生30万回達成で、カラオケ実装が決定します。'
    },
    {
      plays: 500_000,
      title: 'オリ曲制作決定！',
      description: '総再生50万回達成で、新しいオリジナル楽曲の制作が決定します。'
    }
  ] satisfies Milestone[],

  ogImage: '/images/cherish_individual.jpg'
};
