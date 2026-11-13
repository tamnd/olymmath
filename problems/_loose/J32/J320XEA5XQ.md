---
tag: J320XEA5XQ
kind: problem
type: answer
answer: 2^{n}\sin^{n}\frac{x}{2}\sin[+\frac{n(x+\pi)}{2}]
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131884
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum $\sum_{k=0}^{n}(-1)^{n-k}\binom{n}{k} \sin (k x+a)$, where $a$ is a constant.
