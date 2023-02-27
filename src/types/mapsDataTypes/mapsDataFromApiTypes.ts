import { HitObjects, Timing } from './osuDataTypes';

export interface AudioFromApi {
  audioName: string;
  audioFile: string;
}

export interface Images {
  imagesName: string;
  imagesFile: string;
}

export interface MapData {
  colors: number[][];
  difficulty: {
    ApproachRate: number;
    CircleSize: number;
    HPDrainRate: number;
    OverallDifficulty: number;
    SliderMultiplier: number;
    SliderTickRate: number;
  };
  events: string[][];
  general: {
    AudioFilename: string;
    AudioLeadIn: number;
    Countdown: number;
    LetterboxInBreaks: number;
    Mode: number;
    PreviewTime: number;
    SampleSet: string;
    StackLeniency: number;
    WidescreenStoryboard: number;
  };
  hitObjects: HitObjects[];
  metadata: {
    Artist: string;
    ArtistUnicode: string;
    BeatmapID: string;
    BeatmapSetID: string;
    Creator: string;
    Source: string;
    Tags: string;
    Title: string;
    TitleUnicode: string;
    Version: string;
  };
  timingPoints: Timing[];
}

export interface topPlayerItem {
  userName: string;
  userImg: string;
  userScore: number;
}
export interface MapDataFromApi {
  id: string;
  mapName: string;
  audio: string;
  additionAudio: AudioFromApi[];
  images: Images[];
  mapData: MapData[];
  topPlayers: { [key: string]: [] | topPlayerItem[] }[] | [];
}
export interface BeatData {
  AR: number;
  BPM: number;
  CS: number;
  HP: number;
  OD: number;
  aim: number;
  artist: string;
  artistU: string;
  bid: number;
  creator: string;
  favourite_count: number;
  img: string;
  length: number;
  maxcombo: number;
  mode: number;
  passcount: number;
  playcount: number;
  pp: number;
  pp_aim: number;
  ranked: number;
  sid: number;
  source: string;
  speed: number;
  star: number;
  submitted: number;
  title: string;
  titleU: string;
  version: string;
  video: string;
}

export interface INewsData {
  acc: string;
  bid: string;
  combo: string;
  grade: string;
  ip: string;
  mods: string;
  score: string;
  sid: string;
  time: string;
  title: string;
  version: string;
}

export interface BigData {
  AR: number;
  CS: number;
  HP: number;
  OD: number;
  aim: number;
  audio: string;
  bg: string;
  bid: number;
  circles: number;
  hit300window: number;
  img: string;
  length: number;
  maxcombo: number;
  mode: number;
  passcount: number;
  playcount: number;
  pp: number;
  pp_acc: number;
  pp_aim: number;
  pp_speed: number;
  sliders: number;
  speed: number;
  spinners: number;
  star: number;
  strain_aim: string;
  strain_speed: string;
  version: string;
}
export interface ResponseItem {
  approved: number;
  approved_date: number;
  artist: string;
  artistU: string;
  bid_data: BigData[];
  bids_amount: number;
  bpm: number;
  creator: string;
  creator_id: number;
  favourite_count: number;
  genre: number;
  language: number;
  last_update: number;
  local_update: number;
  preview: number;
  sid: number;
  source: string;
  storyboard: number;
  tags: string;
  title: string;
  titleU: string;
  video: number;
}
export interface Result {
  images: string;
  audio: string;
  beatMapInfo: ResponseItem;
  id: string;
}
