# Grader calibration

The jury (cli:claude/claude-sonnet-5-5, cli:claude/claude-opus-5-5, rule min-of-jury-v1) graded the human-graded proofs of the calibration sets. The scores came from a jury run of 2026-11-14. The target is a Cohen's kappa of 0.8 or more on each set.

The sample has 50 of IMO-GradingBench, 50 of ProofBench, 50 of Open Proof Corpus, drawn at random in each set with the seed 20261114 (om calibrate -limit 50 -seed 20261114).

| Set | Licence | Proofs | Exact | Kappa | 95% interval | Quadratic kappa | Within 1 point | Target met |
|---|---|---|---|---|---|---|---|---|
| IMO-GradingBench | CC-BY-4.0 | 50 | 58.0% | 0.585 | 0.397 to 0.752 | 0.692 | 80.0% | no |
| ProofBench | MIT | 50 | 54.0% | 0.496 | 0.287 to 0.687 | 0.754 | 68.0% | no |
| Open Proof Corpus | CC-BY-NC-SA-4.0 | 50 | 92.0% | 0.840 | 0.674 to 0.960 | n/a | n/a | yes |
| All sets, pass or fail | | 150 | 88.7% | 0.735 | 0.617 to 0.844 | n/a | n/a | no |

Kappa is on the four buckets (correct, almost, partial, incorrect), or on pass and fail for the Open Proof Corpus, where a jury pass is a score of 5 or more, the standard of its judges. The buckets of IMO-GradingBench are the labels of the set: almost is 4 to 6 points and partial 1 to 3. The quadratic kappa is on the points from 0 to 7. The row of all sets is on pass and fail, where a human pass is 7 points or a pass of the Open Proof Corpus. The 95% interval is the 2.5 and 97.5 percentiles of the kappa of 2,000 bootstrap resamples of the proofs.

## Each juror alone

The same proofs, with the last score of one juror in place of the jury score.

| Juror | Set | Proofs | Exact | Kappa | 95% interval | Quadratic kappa |
|---|---|---|---|---|---|---|
| cli:claude/claude-sonnet-5-5 | IMO-GradingBench | 50 | 56.0% | 0.588 | 0.413 to 0.756 | 0.695 |
| cli:claude/claude-sonnet-5-5 | ProofBench | 50 | 52.0% | 0.498 | 0.292 to 0.686 | 0.786 |
| cli:claude/claude-sonnet-5-5 | Open Proof Corpus | 50 | 92.0% | 0.840 | 0.674 to 0.960 | n/a |
| cli:claude/claude-sonnet-5-5 | All sets, pass or fail | 150 | 88.7% | 0.735 | 0.617 to 0.844 | n/a |
| cli:claude/claude-opus-5-5 | IMO-GradingBench | 50 | 56.0% | 0.557 | 0.377 to 0.729 | 0.695 |
| cli:claude/claude-opus-5-5 | ProofBench | 50 | 52.0% | 0.503 | 0.298 to 0.682 | 0.753 |
| cli:claude/claude-opus-5-5 | Open Proof Corpus | 50 | 94.0% | 0.880 | 0.720 to 1.000 | n/a |
| cli:claude/claude-opus-5-5 | All sets, pass or fail | 150 | 88.0% | 0.724 | 0.601 to 0.839 | n/a |

The two jurors are of one model family and agree with each other on most proofs. Only 4 of the 150 proofs needed a second round. So the rule of the jury changes little here.

## The change since the run before

The run before (om calibrate of 2026-11-14 with cli:codex and cli:claude/claude-sonnet-5-5) gave these kappas on the same 150 proofs.

| Set | Kappa before | 95% interval before | Kappa now | 95% interval now |
|---|---|---|---|---|
| IMO-GradingBench | 0.468 | 0.291 to 0.642 | 0.585 | 0.397 to 0.752 |
| ProofBench | 0.425 | 0.198 to 0.622 | 0.496 | 0.287 to 0.687 |
| Open Proof Corpus | 0.384 | 0.173 to 0.605 | 0.840 | 0.674 to 0.960 |
| All sets, pass or fail | 0.512 | 0.370 to 0.659 | 0.735 | 0.617 to 0.844 |

Three things changed (olymmath-agent #252). The grader now reads how the human graders of IMO-GradingBench and the Open Proof Corpus use the scale. IMO-GradingBench uses the buckets of its own labels, where 4 points is almost. A jury score of 5 or more is a pass of the Open Proof Corpus, since its judges pass a proof that a competition would give 5 of 7 points. The jury also changed, because the codex client had no allowance left. With the old buckets and a pass at 7, the new scores give 0.490, 0.496, 0.387 and 0.512 overall. So most of the gain comes from the scale of each set, not from the new jury. These choices came from a dev split of 60 other proofs (seed 7001, with the test proofs left out). The test proofs were graded once, at the end.

## The run

The run used the local claude client with its own login, one call at a time. The plan of the client pays for the calls, so the cost is in tokens and seconds, not in US dollars.

| Juror | Calls | Input tokens | Cache read | Cache write | Output tokens | Seconds | Seconds a call |
|---|---|---|---|---|---|---|---|
| claude-opus-5-5 | 154 | 318 | 1,953,226 | 1,636,427 | 254,107 | 2,669 | 17.3 |
| claude-sonnet-5-5 | 154 | 312 | 1,873,741 | 1,630,860 | 147,106 | 1,479 | 9.6 |

The kappa of 0.8 is met on the Open Proof Corpus only. Overall it is 0.735, so the jury is not ready for grades at scale. Until a better rubric or jury meets the target, a person should check the grades of this jury.

Agent decision, not a person's review (by: agent). The scale notes, the pass at 5 for the Open Proof Corpus, the dev split and the jury are the agent's. The texts and the human grades of the sets stay out of git. Only these aggregate numbers are here.
