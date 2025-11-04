
 export const platform: {
  src: string;
  alt: string;
  text: string;
}[] = [
  { src: "/image/android.png", alt: "android", text: "android" },
  { src: "/image/IOS.png", alt: "IOS", text: "ios" },
  { src: "/image/mac.png", alt: "mac", text: "mac" },
  { src: "/image/pc.png", alt: "pc", text: "pc" },
  {
    src: "/image/boardgame.png",
    alt: "boardgame",
    text: "board game",
  },
];

export const social: {
  src: string;
  alt: string;
}[] = [
  { src: "/image/x.png", alt: "x" },
  { src: "/image/tele.png", alt: "tele" },
  { src: "/image/dis.png", alt: "discord" },
  { src: "/image/fb.png", alt: "fb" },
];

// data/gamefiData.js

export const gamefiSections = [
  {
    src: '/image/land.png',
    title: 'LANDS', // Dùng làm ID trạng thái (activeTitle)
    description: 'Generate resources and allow for passive income from other players using the land.',
    mainImageUrl: '/image/bg-land.png' // Ảnh lớn chính
  },
  {
    src: '/image/knight2.png',
    title: 'HEROES (Team)',
    description: 'Lead your team of heroes into epic battles to secure valuable rewards and rank high on leaderboards.',
    mainImageUrl: '/image/knight1.png'
  },
  {
    src: '/image/knight3.png',
    title: 'HEROES (Solo)',
    description: 'Collect, level up, and customize individual heroes to unlock their maximum potential in solo quests.',
    mainImageUrl: '/image/knight2.png'
  },
  {
    src: '/image/pet.png',
    title: 'PETS & MOUNTS',
    description: 'Discover, tame, and evolve unique pets that provide passive buffs and aid in exploration.',
    mainImageUrl: '/image/pet.png'
  },
  {
    src: '/image/alchemy.png',
    title: 'ALCHEMY',
    description: 'Master the art of alchemy to craft powerful potions, legendary gear, and valuable resources for trade.',
    mainImageUrl: '/image/alchemy.png'
  },
  {
    src: '/image/knight1.png',
    title: 'HEROES (Knight)',
    description: 'Focus on legendary knight units, mastering their unique skills and tactical advantage on the battlefield.',
    mainImageUrl: '/image/knight1.png'
  },
];