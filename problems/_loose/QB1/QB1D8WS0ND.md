---
tag: QB1D8WS0ND
kind: problem
type: answer
answer: a_{i}\geqslanti^{2^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126747
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ is a given positive integer no less than 8, $a_{1}, a_{2}, \cdots, a_{n}$ are $n$ positive integers, satisfying $1 \leqslant a_{1} < a_{2} < \cdots < a_{n}$, and for any $k(1 \leqslant k \leqslant n)$, the geometric mean of any $k$ different numbers in $\left\{a_{1}, a_{2}, \cdots, a_{n}\right\}$ is an integer. Prove: For any $i(1 \leqslant i \leqslant n)$, we have $a_{i} \geqslant i^{2^{n-1}}$.
