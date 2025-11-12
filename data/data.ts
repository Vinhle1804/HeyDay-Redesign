
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

  export const navItems = [
    { id: "about", label: "About" },
    { id: "feature", label: "Game features" },
    { id: "footer", label: "Community" },
    { id: "support", label: "Support" },
  ];

export const gameplayData :{
  title: string;
  content: string;
}[] = [
  {
    title: "FACTION ALLIANCES",
    content:
      "Players explore different lands, gather resources, and expand territories. Each region holds different resources, events, and challenges. Conquering new lands increases power and faction influence."
  },
  {
    title: "BLOODLINE POWERS",
    content:
      "Bloodlines grant passive buffs and unique skill paths. Players can unlock deeper potential through artifacts and ancestral missions."
  },
  {
    title: "EXPLORATION AND CONQUES",
    content:
      "Players explore different lands, gather resources, and expand territories. Each region holds different resources, events, and challenges. Conquering new lands increases power and faction influence."
  },
  {
    title: "RELIC HUNTING",
    content:
      "Discover hidden relics across ancient ruins. These relics enhance character strength and unlock faction bonuses."
  },
  {
    title: "CRAFTING AND BLACKSMITHING",
    content:
      "Craft weapons, armor, and consumables. Upgrade and refine gear to enhance combat capability."
  },
  {
    title: "HERO PROGRESSION SYSTEM",
    content:
      "Heroes evolve through quests and combat. Skill trees allow customization to fit each player's strategy."
  },
  {
    title: "PVP BATTLES",
    content:
      "Combat other players in ranked and unranked modes. Climb seasonal ladders and earn exclusive rewards."
  },
  {
    title: "TERRITORIAL CONTROL",
    content:
      "Factions compete for strategic zones. Controlling territories yields rare resources and influence advantages."
  },
  {
    title: "BATTLE ROYALE",
    content:
      "Fight in a shrinking battlefield where only one team or hero survives."
  },
  {
    title: "RAIDS AND BOSS BATTLES",
    content:
      "Cooperate with players to defeat powerful bosses. Rewards scale with difficulty."
  },
  {
    title: "BOARD GAME",
    content:
      "Turn-based strategic mode where factions compete for control on a tactical map."
  },
  {
    title: "OTHERS",
    content:
      "Additional side systems and seasonal game modes expand replay value and player engagement."
  }
];
