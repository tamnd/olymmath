---
tag: GY1Y7HMC53
kind: problem
type: answer
answer: \frac{1}{n+1}C_{2n}^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117960
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: $\sum_{k=0}^{\left[\frac{n}{2}\right]}\left(C_{n}^{k}-C_{n}^{k-1}\right)^{2}=\frac{1}{n+1} C_{2 n}^{n}$.
