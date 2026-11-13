---
tag: R5QNGGQDW0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}^\infty_{n=0}$ be the sequence of real numbers satisfying $a_0=0$, $a_1=1$ and
$$a_{n+2}=a_{n+1}+\frac{a_n}{2^n}$$for every $n\ge0$. Prove that
$$\lim_{n\to\infty}a_n=1+\sum_{n=1}^\infty\frac1{2^{\frac{n(n-1)}2} \prod_{k=1}^n(2^k-1)}.$$
