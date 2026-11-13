---
tag: 8MP207WSWV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=72119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Non-negative integers $x$ and $y$ satisfy the equation $x^{2} - m x y + y^{2} = 1$ (1) if and only if $x$ and $y$ are consecutive terms in the sequence (2): $a_{0}=0, a_{1}=1, a_{2}=m, a_{3}=m^{2}-1, a_{4}=m^{3}-2 m, a_{5}=m^{4}-3 m^{2} +1, \ldots$, where $a_{k+1}=m a_{k}-a_{k-1}$ for any $k \geq 0$. Prove this.
