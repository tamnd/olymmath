---
tag: DB7HFT4KH6
kind: problem
type: answer
answer: \frac{1}{2}n(n+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: $\sum_{k=0}^{\left[\frac{n}{2}\right]}(-1)^{k} C_{n+1}^{k} C_{2 n-2 k-1}^{n}=\frac{1}{2} n(n+1)(n \geqslant 1)$.
