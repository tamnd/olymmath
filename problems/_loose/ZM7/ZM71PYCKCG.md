---
tag: ZM71PYCKCG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227598
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $0\le x_{i,j} \le 1$, where $i=1,2, \ldots m$ and $j=1,2, \ldots n$. Prove the inequality

$$ \prod_{j=1}^n\left(1-\prod_{i=1}^mx_{i,j} \right)+ \prod_{i=1}^m\left(1-\prod_{j=1}^n(1-x_{i,j}) \right) \ge 1 $$
