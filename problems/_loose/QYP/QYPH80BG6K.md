---
tag: QYPH80BG6K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186171
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove:

For every natural number $n>1$ and for any $n+2$ real numbers $p, q, a_{1}, a_{2}, \ldots, a_{n}$, which satisfy

$$
0<p \leq a_i \leq q (i=1,2, \ldots, n)
$$

the following two inequalities hold:

$$
n^{2} \leq\left(\sum_{i=1}^{n} a_{i}\right) \cdot\left(\sum_{k=1}^{n} \frac{1}{a_{k}}\right) \leq n^{2}+\left[\frac{n^{2}}{4}\right] \cdot\left(\sqrt{\frac{p}{q}}-\sqrt{\frac{q}{p}}\right)^{2}
$$
