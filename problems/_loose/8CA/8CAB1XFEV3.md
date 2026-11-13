---
tag: 8CAB1XFEV3
kind: problem
type: answer
answer: 2^{n-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A line in which all natural numbers from 1 to $n$ are written exactly once will be called evident if for any $k$ one of the following conditions is met:

(a) $k$ is written first;

(b) among the numbers written to the left of $k$, there is either $(k-1)$ or $(k+1)$.

Find the number of all evident strings of length $n$.
