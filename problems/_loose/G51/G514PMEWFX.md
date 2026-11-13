---
tag: G514PMEWFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a \in [0 ; 1]$. We define the sequence $\left(x_{n}\right)$ by $x_{0}=a$ and $x_{n+1}=1-\left|1-2 x_{n}\right|$, for all $n \geq 0$.

Prove that the sequence $\left(x_{n}\right)$ is periodic from a certain rank if and only if $a$ is a rational number.

(Note: we say that $\left(x_{n}\right)$ is periodic from a certain rank if there exist integers $T>0$ and $n \geqslant 0$ such that $x_{k+T}=x_{k}$ for all $k \geqslant n$.)
