import { Commentators } from "./generated/commentators";
import { Runners } from "./generated/runners";
import { Score } from "./generated/score";
import { Title } from "./generated/title";

type ReplicantMap = {
  commentators: Commentators;
  runners: Runners;
  score: Score;
  title: Title;
};

export { Commentators, Runners, Score, Title, ReplicantMap };
