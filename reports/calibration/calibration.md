# Grader calibration

The jury (cli:codex, cli:claude/claude-sonnet-5-5, rule min-of-jury-v1) graded the human-graded proofs of the calibration sets. The scores came from the file jury-run-2026-11-14.jsonl. The target is a Cohen's kappa of 0.8 or more on each set.

The sample has 50 of IMO-GradingBench, 50 of ProofBench, 50 of Open Proof Corpus, drawn at random in each set with the seed 20261114 (om calibrate -limit 50 -seed 20261114).

| Set | Licence | Proofs | Exact | Kappa | 95% interval | Quadratic kappa | Within 1 point | Target met |
|---|---|---|---|---|---|---|---|---|
| IMO-GradingBench | CC-BY-4.0 | 50 | 56.0% | 0.468 | 0.291 to 0.642 | 0.674 | 76.0% | no |
| ProofBench | MIT | 50 | 52.0% | 0.425 | 0.198 to 0.622 | 0.702 | 68.0% | no |
| Open Proof Corpus | CC-BY-NC-SA-4.0 | 50 | 68.0% | 0.384 | 0.173 to 0.605 | n/a | n/a | no |
| All sets, pass or fail | | 150 | 80.7% | 0.512 | 0.370 to 0.659 | n/a | n/a | no |

Kappa is on the four buckets (correct, almost, partial, incorrect), or on pass and fail for the Open Proof Corpus, where a pass is a jury score of 7. The quadratic kappa is on the points from 0 to 7. The row of all sets is on pass and fail, where a human pass is 7 points or a pass of the Open Proof Corpus. The 95% interval is the 2.5 and 97.5 percentiles of the kappa of 2,000 bootstrap resamples of the proofs.

## Each juror alone

The same proofs, with the score of one juror in place of the jury score. Each juror alone agrees with the human grades more than the minimum of the two. The jury takes the lower score, so it fails more correct proofs.

| Juror | Set | Proofs | Exact | Kappa | 95% interval | Quadratic kappa |
|---|---|---|---|---|---|---|
| cli:codex (gpt-6-sol) | IMO-GradingBench | 50 | 60.0% | 0.521 | 0.344 to 0.689 | 0.667 |
| cli:codex (gpt-6-sol) | ProofBench | 50 | 54.0% | 0.467 | 0.246 to 0.650 | 0.742 |
| cli:codex (gpt-6-sol) | Open Proof Corpus | 50 | 76.0% | 0.532 | 0.318 to 0.725 | n/a |
| cli:codex (gpt-6-sol) | All sets, pass or fail | 150 | 83.3% | 0.589 | 0.444 to 0.725 | n/a |
| cli:claude/claude-sonnet-5-5 | IMO-GradingBench | 50 | 52.0% | 0.397 | 0.194 to 0.592 | 0.681 |
| cli:claude/claude-sonnet-5-5 | ProofBench | 50 | 54.0% | 0.498 | 0.292 to 0.686 | 0.761 |
| cli:claude/claude-sonnet-5-5 | Open Proof Corpus | 50 | 78.0% | 0.570 | 0.349 to 0.763 | n/a |
| cli:claude/claude-sonnet-5-5 | All sets, pass or fail | 150 | 83.3% | 0.598 | 0.462 to 0.729 | n/a |

## The run

The run used two local command-line clients with their own logins, one call at a time. The plans of the clients pay for the calls, so the cost is in tokens and seconds, not in US dollars. The jury graded with the generic rubric of om, since the sets have no rubric for each problem. 13 of the 150 proofs needed a second round, where the jurors read each other's notes.

| Juror | Calls | Input tokens | Cache read | Cache write | Output tokens | Seconds | Seconds a call |
|---|---|---|---|---|---|---|---|
| gpt-6-sol | 163 | 952,767 | 2,371,072 | 0 | 145,199 | 3,643 | 22.3 |
| claude-sonnet-5-5 | 163 | 326 | 1,938,624 | 1,700,097 | 152,395 | 1,618 | 9.9 |

The kappa of 0.8 is not met on any set, so the jury is not ready for grades at scale. Until a better rubric or jury meets the target, a person should check the grades of this jury.

Agent decision, not a person's review (by: agent). The sample size of 50 a set and the choice of the jury are the agent's. The texts and the human grades of the sets stay out of git. Only these aggregate numbers are here.
