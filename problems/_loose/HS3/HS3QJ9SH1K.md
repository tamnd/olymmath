---
tag: HS3QJ9SH1K
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145247
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any real sequence $\left\{x_{n}\right\}$, define the sequence $\left\{y_{n}\right\}$ as follows:
$$
y_{1}=x_{1}, y_{n+1}=x_{n+1}-\left(\sum_{i=1}^{n} x_{i}^{2}\right)^{\frac{1}{2}}(n \geqslant 1) \text {. }
$$

Find the smallest positive number $\lambda$, such that for any real sequence $\left\{x_{n}\right\}$ and all positive integers $m$, we have
$$
\frac{1}{m} \sum_{i=1}^{m} x_{i}^{2} \leqslant \sum_{i=1}^{m} \lambda^{m-i} y_{i}^{2} \text {. }
$$
(2014, China National Training Team Test)
