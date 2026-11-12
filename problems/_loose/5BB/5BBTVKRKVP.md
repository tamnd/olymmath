---
tag: 5BBTVKRKVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33256
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A random variable $\xi$ is distributed according to the exponential law with the probability density function

$$
p(x, \lambda)=\lambda e^{-\lambda x} \text { for } x \geqslant 0 \text { and } p(x, \lambda)=0 \text { for } x<0,
$$

where $\lambda$ is an unknown parameter. There is a sample

$$
0.61,0.71,1.27,0.10,1.49,1.14,2.15,0.06,0.74,0.28
$$

of values of $\xi$. Find the confidence interval for $\lambda$ at the confidence level $p=0.8$.
