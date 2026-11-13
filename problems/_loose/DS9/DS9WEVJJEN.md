---
tag: DS9WEVJJEN
kind: problem
type: answer
answer: 5,16,26,35,43;11,22,32,41,49;17,28,38,47,55;11,23,34,44,53
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121233
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Place $n$ balls numbered $1,2, \cdots, n(n \geqslant 6)$ in sequence on a circle. Starting from the 1st number, remove one ball every 5 balls, i.e., remove the balls numbered $6,12, \cdots, 6\left[\frac{n}{6}\right], 6\left(\left[\frac{n}{6}\right]+1\right)-n, \cdots$ (where $[x]$ denotes the integer part of $x$), until only 5 balls remain. It is known that when $n=56$, the numbers of the remaining 5 balls are $10,20,29,37,56$. Find the numbers of the remaining 5 balls when $n=57,58,59,60$.
