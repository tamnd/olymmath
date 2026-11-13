---
tag: KT5ZWXGEFK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_{1}, a_{2}, \ldots, a_{n}, \ldots$ is defined by

$$
a_{1}=k ; a_{2}=5 k-2 \text { and } a_{n+2}=3 a_{n+1}-2 a_{n}, n \geq 1
$$

where $k$ is a real number.

a) Find all values of $k$, such that the sequence $\left\{a_{n}\right\}_{n=1}^{\infty}$ is convergent.
b) Prove that if $k=1$ then

$$
a_{n+2}=\left[\frac{7 a_{n+1}^{2}-8 a_{n} a_{n+1}}{1+a_{n}+a_{n+1}}\right], n \geq 1
$$

where $[x]$ denotes the integer part of $x$.
