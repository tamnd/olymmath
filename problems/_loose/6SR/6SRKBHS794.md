---
tag: 6SRKBHS794
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178908
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(x_{n}\right)_{n \geq 1}$, defined recursively as follows:

$$
x_{1}=1 \text { and } x_{n+1}=x_{n}+\frac{1}{a x_{n}^{a-1}}
$$

where $a \in \mathbb{N}-\{0\}$.

a. Prove that the sequence has a limit and calculate this limit.

b. Calculate $\lim _{n \rightarrow \infty} \frac{x_{n+1}}{x_{n}}$.

c. Calculate $\lim _{n \rightarrow \infty} \frac{x_{n}^{a}}{n}$.
