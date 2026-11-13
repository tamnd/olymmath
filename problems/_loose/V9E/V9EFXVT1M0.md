---
tag: V9EFXVT1M0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77873
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $m$ and $n$ be strictly positive integers. In the plane, $m$ points with integer coordinates are marked in red. A valid path is a set $\left\{\left(x_{0}, y_{0}\right), \ldots,\left(x_{n}, y_{n}\right)\right\}$ of points with integer coordinates, none of which are red, such that $\left(x_{0}, y_{0}\right)=(0,0), x_{n}+y_{n}=n$ and for all $0 \leqslant k \leqslant n-1$, either $\left(x_{k+1}, y_{k+1}\right)=\left(x_{k}+1, y_{k}\right)$ or $\left(x_{k+1}, y_{k+1}\right)=\left(x_{k}, y_{k}+1\right)$.

Assume that there exists at least one valid path. Show that there are at least $2^{\mathrm{n}-\mathrm{m}}$ such paths.
