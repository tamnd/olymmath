---
tag: 9RQP4N65TE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78861
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{1}, \ldots, x_{n}$ and $a_{1}, \ldots, a_{n}$ be real numbers in $[0,1]$ such that $\sum_{i=1}^{n} a_{i}=1$. Show that for any $s \in \mathbb{R}$,

$$
\ln \left(\sum_{i=1}^{n} a_{i} e^{s x_{i}}\right) \leqslant\left(e^{s}-1\right) \sum_{i=1}^{n} a_{i} x_{i}
$$
