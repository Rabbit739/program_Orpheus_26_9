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
  invitationText: 'Passion, Memory, Harmony\n\n아직 더위가 채 가시지 않은 초가을 저녁, 오르페우스 제53회 정기연주회를 찾아주신 여러분께 진심으로 감사드립니다.\n오늘 무대에는 두 팀의 중주와 한 팀의 합주가 모였습니다. 음악을 향한 열정(Passion), 함께 만들어 온 소중한 추억(Memory), 그리고 서로의 소리가 어우러져 만들어 내는 조화(Harmony)를 담아 한마음으로 준비한 연주를 여러분께 선보이고자 합니다.\n오늘의 연주가 여러분께도 오래도록 기억될 따뜻한 한 장면이 되기를 바랍니다.',
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
  minsoo: {
    id: 'minsoo',
    name: '김민수',
    role: 'Guitar Duo',
    instrument: '1st Classical Guitar',
    team: '1st Guitar Team (Duo)',
    // TODO: [사진 변경] 김민수 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
    bio: '오르페우스 악장, 한국 기타 콩쿠르 1위',
  },
  jieun: {
    id: 'jieun',
    name: '이지은',
    role: 'Guitar Duo',
    instrument: '2nd Classical Guitar',
    team: '1st Guitar Team (Duo)',
    // TODO: [사진 변경] 이지은 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
    bio: '오르페우스 수석 단원, 다수 실내악 듀오 리사이틀',
  },
  jihyun: {
    id: 'jihyun',
    name: '박지현',
    role: 'Guitar Trio',
    instrument: '1st Guitar',
    team: '2nd Guitar Team (Trio)',
    // TODO: [사진 변경] 박지현 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
    bio: '트리오 리더 및 편곡 담당',
  },
  taeyoung: {
    id: 'taeyoung',
    name: '최태영',
    role: 'Guitar Trio',
    instrument: '2nd Guitar',
    team: '2nd Guitar Team (Trio)',
    // TODO: [사진 변경] 최태영 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80',
    bio: '오르페우스 단원',
  },
  suah: {
    id: 'suah',
    name: '정수아',
    role: 'Guitar Trio',
    instrument: '3rd Guitar (Alto/Bass)',
    team: '2nd Guitar Team (Trio)',
    // TODO: [사진 변경] 정수아 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80',
    bio: '오르페우스 단원 및 저음 파트 수석',
  },
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
        players: [ARTISTS.minsoo, ARTISTS.jieun],
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
        players: [ARTISTS.minsoo, ARTISTS.jieun],
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
        composer: "L. v. Beethoven & R. Tedder (The Pian Guys, arr. 정민영)",
        title: "Beethoven's 5 Secrets (베토벤의 다섯 가지 비밀)",
        category: 'orchestra',
        description: '스페인의 정취를 흠뻑 느낄 수 있는 기타 협주곡의 대명사입니다. 2악장의 아다지오 선율은 전 세계적으로 널리 사랑받고 있습니다.',
        duration: '22 min',
        audioThemeKey: 'aranjuez',
      },
      {
        id: 'piece-6',
        composer: 'G. Rossini (arr. 정민영)',
        title: 'The baber of Seville - Overture (세비야의 이발사 - 서곡)',
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
    url: 'https://images.unsplash.com/photo-1514306191717-452ec28c7814?auto=format&fit=crop&w=1200&q=80',
    title: '오케스트라 전체 리허설',
    caption: '예술의전당 무대 음향 점검 및 오르페우스 전체 합주 연습 현장',
    category: 'Full Orchestra',
  },
  {
    id: 'g-2',
    // TODO: [사진 변경] 솔로 파트 사진 URL을 입력하세요.
    url: 'https://images.unsplash.com/photo-1510915361894-db8b60106cb1?auto=format&fit=crop&w=800&q=80',
    title: '솔로 파트 섬세한 터치',
    caption: '따뜻한 원목 울림통에서 울려 퍼지는 섬세한 아르페지오 연습',
    category: 'Solo / Duo',
  },
  {
    id: 'g-3',
    // TODO: [사진 변경] 앙상블 파트별 사진 URL을 입력하세요.
    url: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80',
    title: '앙상블 파트별 세션 연습',
    caption: '트리오 및 듀오 팀의 세밀한 하모니 조율 시간',
    category: 'Ensemble Practice',
  },
];

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [];
