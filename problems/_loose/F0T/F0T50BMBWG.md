---
tag: F0T50BMBWG
kind: problem
type: answer
answer: 3^{n-3}+3\cdot2^{n-2}+3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=139909
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geqslant 3$, the function $f:\{1,2, \cdots, n\} \rightarrow\{1,2, \cdots, n\}$ satisfies $f(f(k))=(f(k))^{3}-$ $6(f(k))^{2}+12 f(k)-6, \forall k \in\{1,2, \cdots, n\}$, find the number of all such functions.
