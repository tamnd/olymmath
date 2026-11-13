---
tag: DAHGG99ZVQ
kind: problem
type: answer
answer: '[\frac{n-3}{2}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n(n \geqslant 5)$ football teams are participating in a tournament, where any two teams play one match. One match is scheduled each day. The number of days between two consecutive matches for a team is called the "interval number" of these two matches. For example, if a team's first two matches are scheduled on the first and third days, the interval number is 1.
(1) For $n=5$, design a schedule such that all interval numbers for each team are at least 1;
(2) Prove that the minimum interval number does not exceed $\left[\frac{n-3}{2}\right]$.
