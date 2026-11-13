---
tag: C7AVKCNYR5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)_{n \in \mathbb{N}}$ be a sequence defined recursively such that $x_{1}=\sqrt{2}$ and

$$
x_{n+1}=x_{n}+\frac{1}{x_{n}} \text { for } n \in \mathbb{N}
$$

Prove that the following inequality holds:

$$
\frac{x_{1}^{2}}{2 x_{1} x_{2}-1}+\frac{x_{2}^{2}}{2 x_{2} x_{3}-1}+\ldots+\frac{x_{2018}^{2}}{2 x_{2018} x_{2019}-1}+\frac{x_{2019}^{2}}{2 x_{2019} x_{2020}-1}>\frac{2019^{2}}{x_{2019}^{2}+\frac{1}{x_{2019}^{2}}}
$$

(Ivan Novak)
