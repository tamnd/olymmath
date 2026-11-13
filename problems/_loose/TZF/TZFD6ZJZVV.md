---
tag: TZFD6ZJZVV
kind: problem
type: answer
answer: \frac{(n^{2}+1)^{2}}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $a_{i}>0(i=1,2,3, \cdots, n), \sum_{i=1}^{n} a_{i}=1$, prove: $\sum_{i=1}^{n}\left(a_{i}+\frac{1}{a_{i}}\right)^{2} \geqslant \frac{\left(n^{2}+1\right)^{2}}{n}$.
