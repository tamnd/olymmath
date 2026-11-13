---
tag: WX8WA9EM49
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80403
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, \ldots, a_{n}$ be positive real numbers. We define their arithmetic mean by

$$
m=\frac{a_{1}+a_{2}+\ldots+a_{n}}{n}
$$

their geometric mean by

$$
g=\sqrt[n]{a_{1} a_{2} \ldots a_{n}}
$$

and their harmonic mean by

$$
h=\frac{n}{\frac{1}{a_{1}}+\frac{1}{a_{2}}+\ldots+\frac{1}{a_{n}}}
$$

Verify that these means $m, g$ and $h$ are all between $\max \left\{a_{1}, \ldots, a_{n}\right\}$ and $\min \left\{a_{1}, \ldots, a_{n}\right\}$, and show that $h \leqslant g \leqslant m$. In what cases are two of these means equal?
