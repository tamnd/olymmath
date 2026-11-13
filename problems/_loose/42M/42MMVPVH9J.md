---
tag: 42MMVPVH9J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125871
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C_{n}$ denote the number of covers of an $n$-element set $A$. Prove that:
$$
C_{n}=\sum_{j=0}^{n}(-1)^{n-j}\binom{n}{j} 2^{j^{j}-1} .
$$
