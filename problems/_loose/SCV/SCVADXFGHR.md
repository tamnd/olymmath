---
tag: SCVADXFGHR
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73405
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
During the FIFA World Cup, several mathematicians were called upon to speak about the teams' chances of qualification. In the group stage, each group is formed by four teams, and each team faces each of the other teams exactly once. In case of a win, a team earns 3 points; in case of a draw, 1 point; and in case of a loss, 0 points. It is known that the top two teams qualify for the next round. If two teams tie with the same number of points, the tiebreaker is the goal difference. What is the minimum number of points for a team to qualify without depending on the results of other matches?

Note: Remember that to show that the number $k$ found is indeed the minimum, in addition to showing that such a quantity is sufficient to guarantee victory, you must also ensure that there are examples of scores where teams can total no more than $k-1$ points and not advance to the next round.
