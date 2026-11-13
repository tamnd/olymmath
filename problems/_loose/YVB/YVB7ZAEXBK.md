---
tag: YVB7ZAEXBK
kind: problem
type: answer
answer: n\equiv1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75210
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In each vertex of a regular $n$-gon $A_{1} A_{2} \ldots A_{n}$, there is a certain number of coins: in vertex $A_{k}$, there are exactly $k$ coins, $1 \leqq k \leqq n$. We select two coins and move each of them to an adjacent vertex such that one moves in the clockwise direction and the other in the counterclockwise direction. Determine for which $n$ it is possible to achieve, after a finite number of such moves, that for any $k, 1 \leqq k \leqq n$, there will be $n+1-k$ coins in vertex $A_{k}$.

(Radek Horenský)
