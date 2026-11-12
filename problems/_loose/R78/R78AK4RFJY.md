---
tag: R78AK4RFJY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14910
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite sequence of non-zero numbers $a_{1}, a_{2}, a_{3}, \ldots$ is such that for all natural $n \geqslant 2018$ the number $a_{n+1}$ is the smallest root of the polynomial

$$
P_{n}(x)=x^{2 n}+a_{1} x^{2 n-2}+a_{2} x^{2 n-4}+\ldots+a_{n} .
$$

Prove that there exists an $N$ such that in the infinite sequence $a_{N}, a_{N+1}, a_{N+2}, \ldots$ each term is less than the previous one.
