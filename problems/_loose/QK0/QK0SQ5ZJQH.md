---
tag: QK0SQ5ZJQH
kind: problem
type: answer
answer: \alpha\geqslant\frac{1}{2}(\sqrt{5}+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=105946
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two piles of matches have $m$ and $n$ matches respectively, with $m > n$. Two players, A and B, take turns to take matches from one of the piles, with the number of matches taken each time (not equal to 0) being a multiple of the number of matches in the other pile. The player who takes the last match from one of the piles wins.
(1) Prove that when $m > 2n$, the player who takes the first turn, A, can always win.
(2) When $m > \alpha n$, A can always win. Find the range of values for $\alpha$.
