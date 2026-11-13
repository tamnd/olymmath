---
tag: TCP8MHBQF5
kind: problem
type: answer
answer: \frac{37}{18}>\frac{2009}{1000}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110310
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the sequence of positive real numbers $\left\{a_{n}\right\}$ satisfy: $a_{n+1}^{2}$
$$
\geqslant \frac{a_{1}^{2}}{1^{3}}+\frac{a_{2}^{2}}{2^{3}}+\cdots+\frac{a_{n}^{2}}{n^{3}}, n=1,2, \cdots
$$

Prove: There exists a positive integer $m$, such that $\sum_{n=1}^{m}$
$$
\frac{a_{n+1}}{a_{1}+a_{2}+\cdots+a_{n}}>\frac{2009}{1000} .
$$
