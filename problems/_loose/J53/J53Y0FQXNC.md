---
tag: J53Y0FQXNC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,x_2,\cdots,x_{2022}$ be non-negative real numbers such that $$x_k + x_{k+1}+x_{k+2} \leq 2$$ for all $k = 1,2,\cdots,2020$. Prove that $$\sum_{k=1}^{2020}x_kx_{k+2}\leq 1010$$
