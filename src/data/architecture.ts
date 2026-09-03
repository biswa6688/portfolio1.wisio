import type { ArchitecturePath, TechMatrixRow } from '../types';

export const generalLayers: ArchitecturePath = {
  id: 'general',
  label: 'Engineering Layers',
  layers: [
    { id: 'ui', label: 'UI' },
    { id: 'application', label: 'Application Layer' },
    { id: 'api', label: 'API / Services' },
    { id: 'business', label: 'Business Logic' },
    { id: 'data', label: 'Data' },
    { id: 'infra', label: 'Infrastructure' },
  ],
};

export const architecturePaths: ArchitecturePath[] = [
  {
    id: 'web',
    label: 'Web',
    layers: [
      { id: 'react-angular', label: 'React / Angular' },
      { id: 'js-ts', label: 'JavaScript / TypeScript' },
      { id: 'node-dotnet', label: 'Node.js / .NET' },
      { id: 'database', label: 'Database' },
    ],
  },
  {
    id: 'telephony',
    label: 'Telephony',
    layers: [
      { id: 'web-app', label: 'Web / App' },
      { id: 'sdk', label: 'SDK' },
      { id: 'telephony-layer', label: 'Telephony Layer' },
      { id: 'protocols', label: 'TAPI / Avaya / PJSIP' },
    ],
  },
  {
    id: 'native',
    label: 'Native',
    layers: [
      { id: 'web', label: 'Web' },
      { id: 'js-sdk', label: 'JavaScript SDK' },
      { id: 'native-backend', label: 'Native Backend' },
      { id: 'windows', label: 'Windows' },
    ],
  },
];

// Project/technology matrix — only relationships supported by provided facts.
export const techMatrixColumns = [
  { id: 'cpp', label: 'C/C++' },
  { id: 'csharp', label: 'C#' },
  { id: 'jsts', label: 'JS/TS' },
  { id: 'sdk', label: 'SDK' },
  { id: 'telephony', label: 'Telephony' },
  { id: 'webrtc', label: 'WebRTC' },
  { id: 'native', label: 'Native' },
];

export const techMatrix: TechMatrixRow[] = [
  {
    productId: 'fanuc-telephony',
    productName: 'FANUC Telephony',
    tags: { csharp: true, telephony: true },
  },
  {
    productId: 'eros-ivr',
    productName: 'Eros IVR',
    tags: { telephony: true },
  },
  {
    productId: 'techm-telephony',
    productName: 'Tech Mahindra',
    tags: { telephony: true },
  },
  {
    productId: 'radix',
    productName: 'RADIX',
    tags: { cpp: true, csharp: true, jsts: true, sdk: true, telephony: true, native: true },
  },
  {
    productId: 'vision',
    productName: 'VISION',
    tags: { jsts: true, sdk: true, native: true },
  },
  {
    productId: 'webrtc-sdk',
    productName: 'WebRTC SDK',
    tags: { jsts: true, sdk: true, webrtc: true },
  },
];
