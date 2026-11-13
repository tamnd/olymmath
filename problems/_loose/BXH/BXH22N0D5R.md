---
tag: BXH22N0D5R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103641
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a sequence of positive numbers $\left\{x_{n}\right\}$ satisfying $S_{n} \geqslant 2 S_{n-1}, n=2,3 \cdots$, where $S_{n}=x_{1}+x_{2}+\cdots+x_{n}$. Prove: There exists a constant $C>0$, such that $x_{n} \geqslant C \cdot 2^{n}, n=1,2, \cdots$.
