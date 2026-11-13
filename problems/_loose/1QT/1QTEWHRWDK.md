---
tag: 1QTEWHRWDK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=84575
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show by induction that for all $n \geq 1$,

$$
\sum_{k=1}^{n} k^{3}=\left(\sum_{k=1}^{n} k\right)^{2}
$$

Bonus: Let $\left(u_{k}\right)_{k \geq 1}$ be a sequence of strictly positive real numbers such that $\sum_{k=1}^{n} u_{k}^{3}=$ $\left(\sum_{k=1}^{n} u_{k}\right)^{2}$, show that for all $k \geq 1, u_{k}=k$.
