---
tag: WEQWYEK41P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=188347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a non-zero function from the set of positive integers to the set of non-negative integers such that for all positive integers $a$ and $b$,

$$
2 f(a b)=(b+1) f(a)+(a+1) f(b)
$$

Prove that for every prime number $p$ there exists a prime number $q$ and positive integers $x_{1}, \ldots, x_{n}$, as well as an integer $m \geq 0$, such that

$$
\frac{f\left(q^{p}\right)}{f(q)}=\left(p x_{1}+1\right) \cdot \ldots \cdot\left(p x_{n}+1\right) \cdot p^{m}
$$

where all numbers $p x_{1}+1, \ldots, p x_{n}+1$ are prime.
