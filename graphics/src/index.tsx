import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';

import { BundleConfig } from '../../nodecg/bundleConfig';
import { MessageMap } from '../../nodecg/messages';
import { ReplicantMap } from '../../nodecg/replicants';

import App from './App';

declare global {
  interface Window {
    nodecg: CreateNodecgInstance<
      'pokerikadai-rta',
      BundleConfig,
      ReplicantMap,
      MessageMap
    >;
    NodeCG: CreateNodecgConstructor<
      'pokerikadai-rta',
      BundleConfig,
      ReplicantMap,
      MessageMap
    >;
  }
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
