---
tag: NM3EZ300EF
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124076
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 10 players $A_{1}, A_{2}, \cdots, A_{10}$, whose initial points are $9,8,7,6,5,4,3,2,1,0$, and their initial rankings are 1st, 2nd, 3rd, 4th, 5th, 6th, 7th, 8th, 9th, 10th. Now a round-robin tournament is held, meaning that every two players will play exactly one match, and each match must have a winner. If a higher-ranked player beats a lower-ranked player, the winner gets 1 point and the loser gets 0 points; if a lower-ranked player beats a higher-ranked player, the winner gets 2 points and the loser gets 0 points. After all matches are completed, the cumulative points of each player (the sum of the points from this round-robin tournament and their initial points) are calculated, and the players are re-ranked based on their cumulative points. Find the minimum possible cumulative points of the new champion (ties are allowed).
