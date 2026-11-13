---
tag: EQZXSP6AR1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any integer $n$ not less than 2, define $P(n)$ as the largest prime factor of $n$. Define the sequence $\left\{a_{n}\right\}$:
$$
a_{1} \geqslant 2 \text {, }
$$
$a_{n+1}=\left\{\begin{array}{l}a_{n}-P\left(a_{n}\right), a_{n} \text { has at least two distinct prime factors; } \\ a_{n}+P\left(a_{n}\right), a_{n} \text { is a prime or a power of a prime. }\end{array}\right.$
Prove: The sequence $\left\{a_{n}\right\}$ eventually becomes a periodic sequence, i.e., there exist positive integers $N, T$ such that for any positive integer $n \geqslant N$, we have $a_{n+T}=a_{n}$.
