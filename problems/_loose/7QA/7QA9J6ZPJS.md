---
tag: 7QA9J6ZPJS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n=p_{1}^{a_{1}} \ldots p_{k}^{a_{k}}$ be the prime factorization of the number, $\varphi(n)$ the number of integers from 1 to $n$,
coprime with $n$. Prove that

$$
\varphi(n)=n\left(1-\frac{1}{p_{1}}\right)\left(1-\frac{1}{p_{2}}\right) \ldots\left(1-\frac{1}{p_{k}}\right)
$$
