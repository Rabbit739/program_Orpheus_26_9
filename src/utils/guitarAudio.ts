// Web Audio API Classical Guitar Synthesizer for previews

let audioCtx: AudioContext | null = null;
let isPlayingSequence = false;
let currentTimeoutIds: number[] = [];

function getAudioContext(): AudioContext {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    audioCtx = new AudioContextClass();
  }
  if (audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Classical nylon guitar note synthesis using pluck harmonics & body resonator
export function playGuitarNote(freq: number, duration: number = 2.0, timeOffset: number = 0, volume: number = 0.3) {
  try {
    const ctx = getAudioContext();
    const startTime = ctx.currentTime + timeOffset;

    // Pluck oscillator with warm triangle/saw harmonics
    const osc = ctx.createOscillator();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    // Warm sub-harmonic oscillator
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(freq * 0.5, startTime);

    // Filter to simulate guitar wooden soundbox warmth
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2800, startTime);
    filter.frequency.exponentialRampToValueAtTime(400, startTime + duration * 0.7);

    // Nylon string pluck envelope (fast attack, exponential decay)
    const gainNode = ctx.createGain();
    gainNode.gain.setValueAtTime(0.001, startTime);
    gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.015);
    gainNode.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(volume * 0.25, startTime);
    subGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration * 0.8);

    // Connect nodes
    osc.connect(filter);
    subOsc.connect(subGain);
    subGain.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(ctx.destination);

    osc.start(startTime);
    subOsc.start(startTime);
    osc.stop(startTime + duration);
    subOsc.stop(startTime + duration);
  } catch (e) {
    console.warn('Audio playback error:', e);
  }
}

export function stopAllAudio() {
  currentTimeoutIds.forEach((id) => clearTimeout(id));
  currentTimeoutIds = [];
  isPlayingSequence = false;
}

// Classical guitar piece themes notes and frequencies (Hz)
const NOTE_FREQS: Record<string, number> = {
  E2: 82.41, A2: 110.00, D3: 146.83, G3: 196.00, B3: 246.94, E4: 329.63,
  F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88, C4: 261.63, D4: 293.66,
  Cs4: 277.18, Fs4: 369.99, Gs4: 415.30, As4: 466.16,
  C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99,
};

export function playPiecePreview(themeKey: string, onEnded?: () => void) {
  stopAllAudio();
  isPlayingSequence = true;

  let pattern: { note: string; delay: number; duration?: number }[] = [];

  switch (themeKey) {
    case 'aranjuez': // Concierto de Aranjuez Adagio theme
      pattern = [
        { note: 'B3', delay: 0 },
        { note: 'E4', delay: 250 },
        { note: 'G4', delay: 500 },
        { note: 'Fs4', delay: 850 },
        { note: 'E4', delay: 1150 },
        { note: 'D4', delay: 1500 },
        { note: 'E4', delay: 1900 },
        { note: 'B3', delay: 2400, duration: 2.5 },
      ];
      break;
    case 'sor': // L'Encouragement elegant waltz theme
      pattern = [
        { note: 'A2', delay: 0 },
        { note: 'E4', delay: 150 },
        { note: 'A4', delay: 300 },
        { note: 'C5', delay: 450 },
        { note: 'B4', delay: 750 },
        { note: 'A4', delay: 1050 },
        { note: 'Gs4', delay: 1350 },
        { note: 'A4', delay: 1750, duration: 2 },
      ];
      break;
    case 'giuliani': // Variazioni Concertanti virtuosic arpeggio
      pattern = [
        { note: 'D3', delay: 0 },
        { note: 'A3', delay: 180 },
        { note: 'D4', delay: 360 },
        { note: 'Fs4', delay: 540 },
        { note: 'A4', delay: 720 },
        { note: 'D5', delay: 900 },
        { note: 'A4', delay: 1100 },
        { note: 'Fs4', delay: 1300 },
        { note: 'D4', delay: 1500, duration: 2 },
      ];
      break;
    case 'vivaldi': // Lute Concerto in D Baroque motif
      pattern = [
        { note: 'D4', delay: 0 },
        { note: 'Fs4', delay: 200 },
        { note: 'A4', delay: 400 },
        { note: 'D5', delay: 600 },
        { note: 'Cs5', delay: 800 },
        { note: 'B4', delay: 1000 },
        { note: 'A4', delay: 1200 },
        { note: 'Fs4', delay: 1500 },
        { note: 'D4', delay: 1800, duration: 2.2 },
      ];
      break;
    case 'koyunbaba': // Domeniconi exotic Turkish open tuning resonance
      pattern = [
        { note: 'Cs4', delay: 0 },
        { note: 'Gs4', delay: 220 },
        { note: 'Cs4', delay: 440 },
        { note: 'E4', delay: 660 },
        { note: 'Gs4', delay: 880 },
        { note: 'B4', delay: 1100 },
        { note: 'A4', delay: 1400 },
        { note: 'Gs4', delay: 1700, duration: 2.5 },
      ];
      break;
    default:
      pattern = [
        { note: 'E2', delay: 0 },
        { note: 'B3', delay: 200 },
        { note: 'E4', delay: 400 },
        { note: 'G4', delay: 600 },
        { note: 'B4', delay: 800 },
        { note: 'E5', delay: 1000, duration: 2.5 },
      ];
  }

  const maxTime = Math.max(...pattern.map((p) => p.delay + (p.duration || 1.5) * 1000));

  pattern.forEach((item) => {
    const timer = window.setTimeout(() => {
      const freq = NOTE_FREQS[item.note] || 440;
      playGuitarNote(freq, item.duration || 1.8);
    }, item.delay);
    currentTimeoutIds.push(timer);
  });

  const endTimer = window.setTimeout(() => {
    isPlayingSequence = false;
    if (onEnded) onEnded();
  }, maxTime);
  currentTimeoutIds.push(endTimer);
}
