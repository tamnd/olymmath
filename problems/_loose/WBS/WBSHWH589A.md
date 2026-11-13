---
tag: WBSHWH589A
kind: problem
type: answer
answer: "67"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest prime $p$ such that $(p, N)=1$, where $N$ is the number of all $\left(a_{0}, a_{1}, \cdots, a_{2012}\right)$ satisfying the following conditions:
(1) $\left(a_{0}, a_{1}, \cdots, a_{2012}\right)$ is a permutation of $0,1, \cdots, 2012$;
(2) For any positive divisor $m$ of 2013 and all $n(0 \leqslant n<n+m \leqslant 2012)$, $m \mid\left(a_{n+m}-a_{n}\right)$.
