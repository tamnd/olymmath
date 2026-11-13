---
tag: R8ZSMT2QDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=87296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $C$ be a real number, $\left(a_{n}\right)$ a sequence of real numbers, and for every natural number $n$,

$$
M_{n}=\frac{a_{1}+a_{2}+\cdots+a_{n}}{n}
$$

If for any three distinct natural numbers $i, j, k$ it holds that

$$
(i-j) M_{k}+(j-k) M_{i}+(k-i) M_{j}=C
$$

prove that the sequence $\left(a_{n}\right)$ is arithmetic.
