---
tag: YD9NV4YVD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=83669
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Legendre's Formula) We denote $[x]$ as the integer part of the real number $x$. Show that if $p$ is a prime number and $n$ is a positive integer, we have:

$$
v_{p}(n!)=\sum_{i=1}^{\infty}\left[\frac{n}{p^{i}}\right]=\left[\frac{n}{p}\right]+\left[\frac{n}{p^{2}}\right]+\ldots
$$

When $p^{i}>n$, we have $\left[\frac{n}{p^{i}}\right]=0$. This ensures that there are only a finite number of non-zero terms in the sum above.
