---
tag: 2SXATXYXFM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Probabilistic proof of Euler's formula for the Riemann zeta function.) Let $\zeta(s)=\sum_{n=1}^{\infty} n^{-s}-$ be the Riemann zeta function $(1<s<\infty)$. Euler's formula states that $\zeta(s)$ admits the following representation:

$$
\zeta(s)=\prod_{n=1}^{\infty}\left(1-\frac{1}{p_{n}^{s}}\right)^{-1}
$$

where $p_{1}, p_{2}, \ldots$ is the sequence of prime numbers greater than one. Provide a proof of this result.
