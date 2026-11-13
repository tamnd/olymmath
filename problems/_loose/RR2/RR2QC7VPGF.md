---
tag: RR2QC7VPGF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
11 Let $A=\left(a_{1}, a_{2}, \ldots, a_{n}\right)$ be a sequence of integers. The successor of $A$ is the sequence $A^{\prime}=\left(a_{1}^{\prime}, a_{2}^{\prime}, \ldots, a_{n}^{\prime}\right) \mathrm{with}$

$$
a_{k}^{\prime}=\left|\left\{ik \mid a_{i}>a_{k}\right\}\right|
$$

Let $A_{0}$ be a finite sequence of integers and for $k \geq 0$ let $A_{k+1}=A_{k}^{\prime}$ be the successor of $A_{k}$. Show that a natural number $m$ exists with $A_{m}=A_{m+1}$.
