import { CreateNodecgInstance } from 'ts-nodecg/server';

import { BundleConfig } from '../../nodecg/bundleConfig';
import { MessageMap } from '../../nodecg/messages';
import { ReplicantMap } from '../../nodecg/replicants';

export type NodeCG = CreateNodecgInstance<
  'pokerikadai-rta',
  BundleConfig,
  ReplicantMap,
  MessageMap
>;
