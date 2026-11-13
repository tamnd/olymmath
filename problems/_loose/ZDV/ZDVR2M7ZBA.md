---
tag: ZDVR2M7ZBA
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left\{x_{n}\right\}_{n=1}^{\infty}$ is defined as:

$$
x_{1}=3, x_{n+1}=x_{n}^{2}-3 x_{n}+4, n=1,2,3, \ldots
$$

(a) Prove that $\left\{x_{n}\right\}_{n=1}^{\infty}$ is monotone increasing and unbounded.

(b) Prove that the sequence $\left\{y_{n}\right\}_{n=1}^{\infty}$ defined as $y_{n}=\frac{1}{x_{1}-1}+$ $\frac{1}{x_{2}-1}+\cdots+\frac{1}{x_{n}-1}, n=1,2,3, \ldots$, is convergent and find its limit.
