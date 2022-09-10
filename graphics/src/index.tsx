import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {
  CreateNodecgInstance,
  CreateNodecgConstructor
} from 'ts-nodecg/browser';
import { BundleConfig } from '../../nodecg/bundleConfig';
import { ReplicantMap } from '../../nodecg/replicants';
import { MessageMap } from '../../nodecg/messages';

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
