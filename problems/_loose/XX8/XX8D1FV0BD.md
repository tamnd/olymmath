---
tag: XX8D1FV0BD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143516
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence $\left\{a_{n}\right\}$ satisfy: $a_{1}=a_{2}=1$, and
$$
a_{n+1}=a_{n}+\frac{a_{n-1}}{n(n+1)}, n=2,3, \cdots .
$$

Prove: this sequence converges.
