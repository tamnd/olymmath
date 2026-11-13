---
tag: N4MM2B5PPR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that if $n$ is a positive integer, then

$$
\frac{\left(x_{1}^{n}+x_{2}^{n}\right)^{n+1}}{\left(x_{1}^{n-1}+x_{2}^{n-1}\right)^{n}} \leq \frac{\left(x_{1}^{n+1}+x_{2}^{n+1}\right)^{n}}{\left(x_{1}^{n}+x_{2}^{n}\right)^{n-1}}
$$

We understand the $n$-th power mean as $\sqrt[n]{\frac{x_{1}^{n}+x_{2}^{n}}{2}}$. Show that the $n$-th power mean is smaller than the $(n+1)$-th. Show the same for the weighted power means (taking the weighted arithmetic mean under the root instead of the arithmetic mean).
