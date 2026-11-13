---
tag: JVYX9SHKKY
kind: problem
type: answer
answer: \lceil\frac{n}{2}\rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143018
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Party A ranks $n(n \geqslant 3)$ players by strength but does not disclose the ranking to Party B. Party B arbitrarily selects three players to ask Party A, and then Party A can selectively tell Party B which of the three players is the weakest or the strongest. Party B can repeatedly ask questions. If Party B can find a sequence $S_{1}, S_{2}, \cdots, S_{N}$, such that for any player $S_{i}(1 \leqslant i \leqslant N)$, player $S_{i}$ is stronger than player $S_{i+1}$, find the maximum value of $N$.
