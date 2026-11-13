---
tag: CHYAZ9WSWX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133022
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{a_{n}\right\}$ is defined by the following relation:
$$
a_{0}=0, a_{n}=P\left(a_{n-1}\right), n=1,2, \cdots,
$$

where $P(x)$ is a polynomial with positive integer coefficients.
Prove that for any two natural numbers $m$ and $k$ with greatest common divisor $d$, the greatest common divisor of $a_{m}$ and $a_{k}$ is $a_{d}$.
(22nd All-Soviet Union Mathematical Olympiad, 1988)
