import { Artist, GalleryItem, GuestbookEntry, ProgramPart } from '../types';

export const CONCERT_INFO = {
  edition: '제 53회',
  orchestraName: '오르페우스 클래식 기타 합주단',
  title: '제 53회 ORPHEUS 정기연주회',
  subtitle: 'Aureate Strings: 53rd Annual Classical Guitar Concert',
  date: '2026년 9월 3일 (목) 19:00',
  venue: '연세대학교 백주년기념관 (Yonsei University Centennial Hall Concert Hall)',
  address: '서울특별시 서대문구 연세로 50 연세대학교 백주년기념관',
  admission: '전석 무료 초대 (Free Admission)',
  invitationText: 'Passion, Memory, Harmony\n\n아직 더위가 채 가시지 않은 초가을 저녁, \n오르페우스 제53회 정기연주회를 찾아주신 \n여러분께 진심으로 감사드립니다.\n\n오늘 무대에는 두 팀의 중주와 한 팀의 합주가 모였습니다. \n음악을 향한 열정(Passion), 함께 만들어 온 소중한 추억(Memory), 그리고 서로의 소리가 어우러져 만들어 내는 조화(Harmony)를 담아 한마음으로 준비한 연주를 여러분께 선보이고자 합니다.\n\n오늘의 연주가 여러분께도 오래도록 기억될 따뜻한 한 장면이 되기를 바랍니다.',
  inquiry: '02-580-1300 / contact@orpheus-guitar.org',
};

export const ARTISTS: Record<string, Artist> = {
  conductor: {
    id: 'conductor',
    name: '정민영 (Jeong Min-yeong)',
    role: '지휘자 / Conductor',
    instrument: 'Conductor & Music Director',
    // TODO: [사진 변경] 지휘자 프로필 사진 URL을 입력하세요.
    avatar: './photo_Jeong.jpg',
    bio: '오르페우스 제 53회 정기연주회 지휘자',
  },
  concertmaster: {
    id: 'concertmaster',
    name: '윤주희',
    role: 'Concertmaster',
    instrument: '1st Part',
    avatar: './logo.png',
    bio: '오르페우스 악장',
  },
  second_leader: {
    id: 'second_leader',
    name: '최민정',
    role: '2nd part leader',
    instrument: '2nd Part',
    avatar: './logo.png',
    bio: 'Second 파트장',
  },
  third_leader: {
    id: 'third_leader',
    name: '이규연',
    role: '3rd part leader',
    instrument: '3rd Part',
    avatar: './logo.png',
    bio: 'Third 파트장',
  },
  fourth_leader: {
    id: 'fourth_leader',
    name: '위준서',
    role: '4th part leader',
    instrument: '4th Part',
    avatar: './logo.png',
    bio: 'Fourth 파트장',
  },
  first_assistant: {
    id: 'first_assistant',
    name: '이서진',
    role: '1st assistant leader',
    instrument: '1st Part',
    avatar: './logo.png',
    bio: 'First 부파트장',
  },
  second_assistant: {
    id: 'second_assistant',
    name: '박성하',
    role: '2nd assistant leader',
    instrument: '2nd Part',
    avatar: './logo.png',
    bio: 'Second 부파트장',
  },
  third_assistant: {
    id: 'third_assistant',
    name: '김동하',
    role: '3rd assistant leader',
    instrument: '3rd Part',
    avatar: './logo.png',
    bio: 'Third 부파트장',
  },
  fourth_assistant: {
    id: 'fourth_assistant',
    name: '문소영',
    role: '4th assistant leader',
    instrument: '4th Part',
    avatar: './logo.png',
    bio: 'Fourth 부파트장',
  },

  // 1st Part
  p1_1: { id: 'p1_1', name: '송지민', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_2: { id: 'p1_2', name: '윤도현', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_3: { id: 'p1_3', name: '김영훈', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_4: { id: 'p1_4', name: '임지민', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_5: { id: 'p1_5', name: '윤준환', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_6: { id: 'p1_6', name: '고한슬', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_7: { id: 'p1_7', name: '김율희', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_8: { id: 'p1_8', name: '안호성', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },
  p1_9: { id: 'p1_9', name: '태유준', role: '', instrument: '1st Part', avatar: './logo.png', bio: '' },

  // 2nd Part
  p2_1: { id: 'p2_1', name: '최혁준', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_2: { id: 'p2_2', name: '정재호', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_3: { id: 'p2_3', name: '양윤지', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_4: { id: 'p2_4', name: '이은우', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_5: { id: 'p2_5', name: '김규아', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_6: { id: 'p2_6', name: '김동헌', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_7: { id: 'p2_7', name: '김성주', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_8: { id: 'p2_8', name: '오창완', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },
  p2_9: { id: 'p2_9', name: '윤채원', role: '', instrument: '2nd Part', avatar: './logo.png', bio: '' },

  // 3rd Part
  p3_1: { id: 'p3_1', name: '이해찬', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_2: { id: 'p3_2', name: '김효림', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_3: { id: 'p3_3', name: '문경후', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_4: { id: 'p3_4', name: '이영민', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_5: { id: 'p3_5', name: '노윤지', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_6: { id: 'p3_6', name: '이서영', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_7: { id: 'p3_7', name: '이재호', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },
  p3_8: { id: 'p3_8', name: '최우성', role: '', instrument: '3rd Part', avatar: './logo.png', bio: '' },

  // 4th Part
  p4_1: { id: 'p4_1', name: '공경배', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_2: { id: 'p4_2', name: '김도형', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_3: { id: 'p4_3', name: '서정주', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_4: { id: 'p4_4', name: '정원지', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_5: { id: 'p4_5', name: '김예림', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_6: { id: 'p4_6', name: '박은수', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_7: { id: 'p4_7', name: '윤소희', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_8: { id: 'p4_8', name: '이준한', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },
  p4_9: { id: 'p4_9', name: '정예은', role: '', instrument: '4th Part', avatar: './logo.png', bio: '' },

  // Guest
  guest_1: { id: 'guest_1', name: '황호연', role: 'Guest musician', instrument: 'Guest', avatar: './logo.png', bio: '객원 연주자' },
};

export const PROGRAM_PARTS: ProgramPart[] = [
  {
    partNumber: 'PART I',
    time: '17:00',
    title: 'Chamber Ensembles',
    pieces: [
      {
        id: 'piece-1',
        composer: 'C. McKay (arr. M. Baker)',
        title: "The Swan 'LK 243' (스완호 'LK 243')",
        category: 'ensemble',
        teamName: '1st Guitar Quartet (김영훈, 정원지, 최민정, 문경후)',
        teamType: 'Quartet',
        players: [],
        description: '소르의 위안은 두 대의 기타가 주고받는 우아한 대화가 돋보이는 곡입니다. 서정적인 칸타빌레와 경쾌한 왈츠가 대비를 이룹니다.',
        duration: '11 min',
        audioThemeKey: 'sor',
      },
      {
        id: 'piece-2',
        composer: 'M. Giuliani',
        title: 'Variazioni Concertanti Op.130',
        category: 'ensemble',
        teamName: '1st Guitar Team (김민수, 이지은)',
        teamType: 'Guitar Duo',
        players: [],
        description: '줄리아니의 화려한 기교가 돋보이는 이중주곡입니다. 변주곡 형식을 통해 기타 특유의 다채로운 음색과 리듬감을 극대화하여 보여줍니다.',
        duration: '9 min',
        audioThemeKey: 'giuliani',
      },
      {
        id: 'piece-3',
        composer: 'A. Ramirez (arr. R. Dyens)',
        title: 'Alfonsina y el mar (알폰시나와 바다)',
        category: 'ensemble',
        teamName: '2nd Guitar Quartet (최혁준, 김태성, 송지민, 임현석)',
        teamType: 'Quartet',
        players: [],
        description: '아르헨티나의 구전 민요를 바탕으로 한 아름다운 곡입니다. 애절한 선율과 짙은 감성이 특징입니다.',
        duration: '6 min',
        audioThemeKey: 'ramirez',
      },
      {
        id: 'piece-4',
        composer: 'W. Bolcom (arr. 정민영)',
        title: 'Graceful Ghost (우아한 유령)',
        category: 'ensemble',
        teamName: '2nd Guitar Quartet (최혁준, 김태성, 송지민, 임현석)',
        teamType: 'Quartet',
        players: [],
        description: '랙타임 특유의 리듬과 서정적인 멜로디가 어우러져 독특한 매력을 발산하는 곡입니다.',
        duration: '5 min',
        audioThemeKey: 'bolcom',
      },
    ],
  },
  {
    partNumber: 'PART II',
    time: '',
    title: 'Ensemble',
    conductor: ARTISTS.conductor,
    pieces: [
      {
        id: 'piece-5',
        composer: "L. v. Beethoven & R. Tedder (The Piano Guys, arr. 정민영)",
        title: "Beethoven's 5 Secrets (베토벤의 다섯 가지 비밀)",
        category: 'orchestra',
        description: '스페인의 정취를 흠뻑 느낄 수 있는 기타 협주곡의 대명사입니다. 2악장의 아다지오 선율은 전 세계적으로 널리 사랑받고 있습니다.',
        duration: '22 min',
        audioThemeKey: 'aranjuez',
      },
      {
        id: 'piece-6',
        composer: 'G. Rossini (arr. 정민영)',
        title: 'The Barber of Seville - Overture (세비야의 이발사 - 서곡)',
        category: 'orchestra',
        description: '터키의 양치기를 의미하는 코윤바바는 독특한 조율과 주법을 통해 신비롭고 이국적인 분위기를 자아내는 현대 기타의 명곡입니다. 오케스트라 편곡으로 더욱 웅장하게 선보입니다.',
        duration: '15 min',
        audioThemeKey: 'koyunbaba',
      },
    ],
  },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-1',
    // TODO: [사진 변경] 오케스트라 전체 리허설 사진 URL을 입력하세요.
    url: './During_Orpheus/KakaoTalk_20260831_170546698.png',
    title: '오케스트라 전체 리허설',
    caption: '예술의전당 무대 음향 점검 및 오르페우스 전체 합주 연습 현장',
    category: 'Full Orchestra',
  },
  {
    id: 'g-2',
    // TODO: [사진 변경] 솔로 파트 사진 URL을 입력하세요.
    url: './During_Orpheus/KakaoTalk_20260831_170546698_01.jpg',
    title: '솔로 파트 섬세한 터치',
    caption: '따뜻한 원목 울림통에서 울려 퍼지는 섬세한 아르페지오 연습',
    category: 'Solo / Duo',
  },
  {
    id: 'g-3',
    // TODO: [사진 변경] 앙상블 파트별 사진 URL을 입력하세요.
    url: './During_Orpheus/KakaoTalk_20260831_170546698_02.jpg',
    title: '앙상블 파트별 세션 연습',
    caption: '트리오 및 듀오 팀의 세밀한 하모니 조율 시간',
    category: 'Ensemble Practice',
  },
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [];
