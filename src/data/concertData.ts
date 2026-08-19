import { Artist, GalleryItem, GuestbookEntry, ProgramPart } from '../types';

export const CONCERT_INFO = {
  edition: '제 34회',
  orchestraName: '오르페우스 클래식 기타 합주단',
  title: '제 34회 오르페우스 클래식 기타 정기연주회',
  subtitle: 'Aureate Strings: 34th Annual Classical Guitar Concert',
  date: '2026년 9월 2일 (토) 17:00',
  venue: '예술의전당 리사이틀홀 (Seoul Arts Center, Recital Hall)',
  address: '서울특별시 서초구 남부순환로 2406 예술의전당',
  dDay: 'D - 14',
  admission: '전석 무료 초대 (Free Admission)',
  invitationText: '깊어가는 가을 밤, 나무의 울림으로 쓰여진 34번째 편지를 여러분께 띄웁니다. 손끝에서 피어나는 따뜻한 선율이 바쁜 일상 속에 작은 쉼표가 되기를 바랍니다.',
  inquiry: '02-580-1300 / contact@orpheus-guitar.org',
};

export const ARTISTS: Record<string, Artist> = {
  conductor: {
    id: 'conductor',
    name: '김지훈 (Kim Ji-hoon)',
    role: '지휘자 / Conductor',
    instrument: 'Conductor & Music Director',
    // TODO: [사진 변경] 지휘자 프로필 사진 URL을 입력하세요.
    avatar: 'https://images.unsplash.com/photo-1507676184212-d03ab07a01bf?auto=format&fit=crop&w=400&q=80',
    bio: '독일 쾰른 국립음대 지휘과 및 클래식 기타과 졸업. 한국 클래식 기타 협회 이사, 국내 유수의 앙상블 및 오케스트라 지휘 역임.',
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
        composer: 'F. Sor',
        title: "L'Encouragement Op.34",
        category: 'ensemble',
        teamName: '1st Guitar Team (김민수, 이지은)',
        teamType: 'Guitar Duo',
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
        composer: 'A. Vivaldi',
        title: 'Lute Concerto in D Major',
        category: 'ensemble',
        teamName: '2nd Guitar Team (박지현, 최태영, 정수아)',
        teamType: 'Guitar Trio',
        players: [ARTISTS.jihyun, ARTISTS.taeyoung, ARTISTS.suah],
        description: '비발디의 류트 협주곡을 3대의 기타를 위해 편곡한 버전입니다. 바로크 특유의 활기찬 리듬과 서정적인 선율이 일품입니다.',
        duration: '12 min',
        audioThemeKey: 'vivaldi',
      },
    ],
  },
  {
    partNumber: 'PART II',
    time: '18:00',
    title: 'Full Orchestra',
    conductor: ARTISTS.conductor,
    pieces: [
      {
        id: 'piece-4',
        composer: 'J. Rodrigo',
        title: 'Concierto de Aranjuez',
        category: 'orchestra',
        movements: ['I. Allegro con spirito', 'II. Adagio', 'III. Allegro gentile'],
        description: '스페인의 정취를 흠뻑 느낄 수 있는 기타 협주곡의 대명사입니다. 2악장의 아다지오 선율은 전 세계적으로 널리 사랑받고 있습니다.',
        duration: '22 min',
        audioThemeKey: 'aranjuez',
      },
      {
        id: 'piece-5',
        composer: 'C. Domeniconi',
        title: 'Koyunbaba',
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

export const INITIAL_GUESTBOOK: GuestbookEntry[] = [
  {
    id: 'gb-1',
    author: '기타 애호가 한지훈',
    message: '34회 정기연주회 진심으로 축하드립니다! 특히 아랑훼즈 2악장 합주 기대하고 있겠습니다. 모든 단원분들 파이팅!',
    target: '전체 합주단',
    likes: 12,
    timestamp: '2026.08.18 19:40',
  },
  {
    id: 'gb-2',
    author: '클래식 음악팬 윤서연',
    message: '듀오팀 소르 위안 곡 정말 좋아하는데 실황으로 들을 수 있어 설렙니다. 공연 날 꼭 일찍 가서 자리 잡을게요!',
    target: '1st Guitar Team',
    likes: 8,
    timestamp: '2026.08.18 21:15',
  },
  {
    id: 'gb-3',
    author: '오르페우스 동문 정민규',
    message: '선후배님들의 땀방울이 가득 담긴 무대 응원합니다. 나무의 향기와 울림이 전당에 가득 차길!',
    target: '오르페우스 합주단',
    likes: 15,
    timestamp: '2026.08.19 09:20',
  },
];
