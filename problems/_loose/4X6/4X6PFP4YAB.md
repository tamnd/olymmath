---
tag: 4X6PFP4YAB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: $S_{2}(n+1, k)=\sum_{j=k-1}^{n}\binom{n}{j} S_{2}(j, k-1) (n \geqslant k \geqslant 2)$.
