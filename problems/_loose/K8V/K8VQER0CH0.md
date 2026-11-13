---
tag: K8VQER0CH0
kind: problem
type: answer
answer: '{\begin{pmatrix}2p-1,p\equiv1(\bmod4)\\1,\quadp\equiv3(\bmod4)\end{pmatrix}.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an odd prime $p$, find the number of elements in the set $\left\{(x, y) \mid x^{2}+y^{2} \equiv a(\bmod p) ; x, y \in\{0,1,2, \mathrm{~L}, p-1\}\right\}$.
