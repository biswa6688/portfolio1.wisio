import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'fanuc-telephony',
    name: 'FANUC India Telephony Application',
    tagline: 'Rich telephony features on TAPI + Avaya IP Office',
    description:
      'A telephony application providing rich telephony features for FANUC India, built on TAPI and integrated with Avaya IP Office.',
    client: 'FANUC India',
    technologies: ['tapi', 'avaya-ipoffice'],
    category: 'telephony',
    architecture: [
      { id: 'web', label: 'Web / Application' },
      { id: 'telephony-app', label: 'Telephony Application' },
      { id: 'tapi', label: 'TAPI' },
      { id: 'avaya', label: 'Avaya IP Office' },
      { id: 'infra', label: 'Telephone Infrastructure' },
    ],
  },
  {
    id: 'eros-ivr',
    name: 'Eros International IVR Application',
    tagline: 'Telephony IVR on TAPI + Avaya IP Office',
    description:
      'A telephony IVR application for Eros International, handling call flow from the telephone network through Avaya IP Office and TAPI into application business logic.',
    client: 'Eros International',
    technologies: ['tapi', 'avaya-ipoffice'],
    category: 'telephony',
    architecture: [
      { id: 'caller', label: 'Caller' },
      { id: 'network', label: 'Telephone Network' },
      { id: 'avaya', label: 'Avaya IP Office' },
      { id: 'tapi', label: 'TAPI' },
      { id: 'ivr', label: 'IVR Application' },
      { id: 'logic', label: 'Business Logic' },
    ],
  },
  {
    id: 'techm-telephony',
    name: 'Tech Mahindra Telephony Application',
    tagline: 'Telephony rich-features application on Avaya POM',
    description:
      'A telephony rich-features application for Tech Mahindra, built on Avaya POM for enterprise communication.',
    client: 'Tech Mahindra',
    technologies: ['avaya-pom'],
    category: 'telephony',
    architecture: [
      { id: 'app', label: 'Application' },
      { id: 'pom', label: 'Avaya POM' },
      { id: 'infra', label: 'Enterprise Communication Infrastructure' },
    ],
  },
  {
    id: 'radix',
    name: 'RADIX',
    tagline: 'Softphone engine with a JavaScript SDK',
    description:
      'A softphone product built in C, C#, and PJSIP, exposed to web applications through the RADIX JavaScript SDK — letting web apps integrate telephone functionality directly.',
    technologies: ['c', 'csharp', 'pjsip', 'javascript'],
    category: 'sdk',
    flagship: true,
    architecture: [
      { id: 'web-app', label: 'Web Application' },
      { id: 'sdk', label: 'RADIX JavaScript SDK' },
      { id: 'engine', label: 'RADIX Softphone Engine' },
      { id: 'native', label: 'C# / C' },
      { id: 'pjsip', label: 'PJSIP' },
      { id: 'sip', label: 'VoIP / SIP Communication' },
    ],
  },
  {
    id: 'vision',
    name: 'VISION',
    tagline: 'Screen recorder with a JavaScript SDK',
    description:
      'A screen-recording product using Windows native libraries on the backend, exposed to web applications through the VISION JavaScript SDK.',
    technologies: ['javascript', 'windows-native'],
    category: 'sdk',
    flagship: true,
    architecture: [
      { id: 'web-app', label: 'Web Application' },
      { id: 'sdk', label: 'VISION JavaScript SDK' },
      { id: 'native-layer', label: 'Native Recording Layer' },
      { id: 'windows-api', label: 'Windows Native APIs' },
      { id: 'capture', label: 'Screen Capture' },
    ],
  },
  {
    id: 'webrtc-sdk',
    name: 'WebRTC Wrapper SDK',
    tagline: 'A WebRTC wrapper SDK for real-time communication',
    description:
      'A WebRTC wrapper SDK library designed to let web applications implement telephone / real-time communication features through a simplified JavaScript interface.',
    technologies: ['javascript', 'webrtc'],
    category: 'sdk',
    flagship: true,
    architecture: [
      { id: 'web-app', label: 'Web Application' },
      { id: 'sdk', label: 'JavaScript SDK' },
      { id: 'wrapper', label: 'WebRTC Wrapper' },
      { id: 'webrtc', label: 'WebRTC' },
      { id: 'rtc', label: 'Real-Time Communication' },
    ],
  },
];
