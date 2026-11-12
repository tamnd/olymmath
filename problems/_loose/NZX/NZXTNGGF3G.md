---
tag: NZXTNGGF3G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33786
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [86].) Let $X$ be a random variable taking a finite number of values $x_{1}<\ldots<x_{n}, n \geqslant 2$. Show that for all $a, b \in \mathbb{R}$, the following equality holds:

$$
\mathrm{D} X=\mathrm{E}(X-a)(X-b)+(\mathrm{E} X-a)(b-\mathrm{E} X),
$$

and derive from this that

$$
\left(\mathrm{E} X-x_{i}\right)\left(x_{i+1}-\mathrm{E} X\right) \leqslant \mathrm{D} X \leqslant\left(\mathrm{E} X-x_{1}\right)\left(x_{n}-\mathrm{E} X\right),
$$

where $x_{i}, x_{i+1}$ are chosen such that $x_{i} \leqslant \mathrm{E} X<x_{i+1}$. In which cases are the equalities achieved?
