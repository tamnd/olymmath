---
tag: 5ATAEP0ATW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260455
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{n}$ denote the number of paths in the coordinate plane traveling from $(0, 0)$ to $(n, 0)$ with three kinds of moves: *upstep* $u = [1, 1]$, *downstep* $d = [1,-1]$, and *flatstep* $f = [1, 0]$ with the path always staying above the line $y = 0.$ Let $C_{n}= \frac{1}{n+1}\binom{2n}{n}$ be the $n^{th}$ Catalan number. Prove that

$P_{n}= \sum_{i = 0}^\infty \binom{n}{2i}C_{i}$ and $C_{n}= \sum_{i = 0}^{2n}(-1)^{i}\binom{2n}{i}P_{2n-i}.$
