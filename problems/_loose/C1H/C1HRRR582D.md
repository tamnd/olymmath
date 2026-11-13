---
tag: C1HRRR582D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121515
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
5 Prove: There exists a unique sequence of natural numbers $\left\{u_{0}, u_{1}, u_{2}, \cdots\right\}$, such that for all $n \geqslant 0$, we have
$$
u_{n}^{2}=\sum_{r=0}^{n} C_{n+r}^{r} u_{n-r}
$$
