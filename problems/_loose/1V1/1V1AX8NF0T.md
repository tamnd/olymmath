---
tag: 1V1AX8NF0T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 CMIMC
    url: https://artofproblemsolving.com/community/c6h2791430
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=132
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2022
    source: hf-ai-mo-aops
    label: 2022 CMIMC
---
There are 36 contestants in the CMU Puyo-Puyo Tournament, each with distinct skill levels.

The tournament works as follows:
First, all $\binom{36}{2}$ pairings of players are written down on slips of paper and are placed in a hat.
Next, a slip of paper is drawn from the hat, and those two players play a match. It is guaranteed that the player with a higher skill level will always win the match.
We continue drawing slips (without replacement) and playing matches until the results of the match completely determine the order of skill levels of all 36 contestants (i.e. there is only one possible ordering of skill levels consistent with the match results), at which point the tournament immediately finishes.
What is the expected value of the number of matches played before the stopping point is reached?

*Proposed by Dilhan Salgado*
