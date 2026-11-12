---
tag: SBXY2JT0RD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random variable $\xi$ has the distribution function

$$
F(x)=\Phi(x)=\frac{1}{\sqrt{2 \pi}} \int_{-\infty}^{x} e^{-u^{2} / 2} d u
$$

1. Find the probability that the interval $(\xi-1, \xi+1)$ contains the number 2.3.
2. Find $a$ and $b$ such that the interval $(\xi-a, \xi+b)$ contains the number 2.3 with a probability of 0.98, and $\mathrm{P}(2.3\xi+b)$.
