---
tag: AJDQ7F6KAS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any integer $n \in \mathbb{N}^{*}$, we denote $v_{3}(n)$ as the 3-adic valuation of $n$, which is the greatest integer $k$ such that $n$ is divisible by $3^{k}$. We set $u_{1}=2$ and $u_{n}=4 v_{3}(n)+2-\frac{2}{u_{n-1}}$ for all $n \geqslant 2$ (provided that $u_{n-1}$ is defined and non-zero).

Show that, for any positive rational number $q$, there exists a unique integer $n \geqslant 1$ such that $u_{n}=q$.
