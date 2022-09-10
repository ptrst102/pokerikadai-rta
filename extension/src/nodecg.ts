import { CreateNodecgInstance } from 'ts-nodecg/server';
import { BundleConfig } from '../../nodecg/bundleConfig';
import { ReplicantMap } from '../../nodecg/replicants';
import { MessageMap } from '../../nodecg/messages';

export type NodeCG = CreateNodecgInstance<
  'pokerikadai-rta',
  BundleConfig,
  ReplicantMap,
  MessageMap
>;
