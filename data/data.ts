import { ExploreWorld, Insight, NewFeature, Social } from "./data.interface";

export const exploreWorlds: ExploreWorld[] = [
  {
    id: "world-1",
    imgUrl: "/Planet01.png",
    title: "The Hogwarts",
  },
  {
    id: "world-2",
    imgUrl: "/Planet02.png",
    title: "The Upside Down",
  },
  {
    id: "world-3",
    imgUrl: "/Planet03.png",
    title: "Kadirojo Permai",
  },
  {
    id: "world-4",
    imgUrl: "/Planet04.png",
    title: "Paradise Island",
  },
  {
    id: "world-5",
    imgUrl: "/Planet05.png",
    title: "Hawkins Labs",
  },
];

export const startingFeatures: string[] = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

export const newFeatures: NewFeature[] = [
  {
    imgUrl: "/VrPano.svg",
    title: "A new world",
    subtitle:
      "We have a variety of virtual worlds for you to explore and play around",
  },
  {
    imgUrl: "/Headset.svg",
    title: "Realistic",
    subtitle:
      "In the latest update, our virual worlds are focused more realistic than ever",
  },
];

export const insights: Insight[] = [
  {
    imgUrl: "/Planet06.png",
    title: "The launch of the Metaverse makes Elon musk ketar-ketir",
    subtitle:
      "Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.",
  },
  {
    imgUrl: "/Planet07.png",
    title: "7 tips to easily master the madness of the Metaverse",
    subtitle:
      "Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum",
  },
  {
    imgUrl: "/Planet08.png",
    title: "With one platform you can explore the whole world virtually",
    subtitle:
      "Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem",
  },
];

export const socials: Social[] = [
  {
    name: "twitter",
    url: "/Twitter.svg",
  },
  {
    name: "linkedin",
    url: "/Linkedin.svg",
  },
  {
    name: "instagram",
    url: "/Instagram.svg",
  },
  {
    name: "facebook",
    url: "/Facebook.svg",
  },
];
