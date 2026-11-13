---
tag: 6BBXR1P6EN
kind: problem
type: answer
answer: a_{n}=\cot\frac{\pi}{2^{n+1}}-\cot\frac{\pi}{2^{n}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the positive sequence $\left\{a_{n}\right\}$ satisfy: $a_{1}=1, a_{n}=\frac{1}{2}\left(S_{n}+\frac{1}{S_{n}}\right)$, where $S_{n}=\sum_{i=1}^{n} a_{i}$, find the general term formula of the sequence $\left\{\mathrm{a}_{\mathrm{n}}\right\}$.
