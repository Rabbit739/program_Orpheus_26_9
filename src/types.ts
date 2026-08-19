export interface Artist {
  id: string;
  name: string;
  role: string;
  instrument: string;
  avatar: string;
  bio?: string;
  team?: string;
}

export interface Piece {
  id: string;
  composer: string;
  title: string;
  movements?: string[];
  description: string;
  category: 'ensemble' | 'orchestra';
  teamName?: string;
  teamType?: string;
  players?: Artist[];
  audioThemeKey?: string;
  duration?: string;
}

export interface ProgramPart {
  partNumber: string;
  time: string;
  title: string;
  pieces: Piece[];
  conductor?: Artist;
}

export interface GalleryItem {
  id: string;
  url: string;
  title: string;
  caption: string;
  category: string;
}

export interface GuestbookEntry {
  id: string;
  author: string;
  message: string;
  target?: string; // e.g. "전체 연주자", "1st Guitar Team", etc.
  likes: number;
  timestamp: string;
}
