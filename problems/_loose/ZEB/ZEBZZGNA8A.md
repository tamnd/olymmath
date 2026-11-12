---
tag: ZEBZZGNA8A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 South East Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3368727
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36683
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo/2024
    source: hf-ai-mo-aops
    label: 2024 South East Mathematical Olympiad
---
three colors of hats (Red, Blue, Yellow) are prepared for a game, which is held for a team group with $n>4$ students against an AI (who has an iNFiNiTE supply of hats). Everyone knows $n$ and the types of colors of hats, and they need to come up with a winning strategy before these things happen in order:
1. the students sit around a circular table.
2. the AI represents a hat each to every student. The students can only see the two hats of their two neighbors (that is, the one nearest on the clockwise and the one nearest to the counterclockwise.) they do NOT see their own hats.
3. every student makes a silent guess to the AI about their own hat's color at the same time.
the AI wins if all guesses are wrong. the team wins otherwise.
now, does this winning stragedy (for the team) exist if:
(1) $n=4$ ?
(2) $n=999$ ?
