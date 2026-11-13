---
tag: EW8KM0QM4H
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106069
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let real numbers $x_{1}, x_{2}, \cdots, x_{n} \in (0,1)$. For any permutation $\sigma$ of $\{1,2, \cdots, n\}$, prove:
$$
\sum_{i=1}^{n} \frac{1}{1-x_{i}} \geq\left(1+\frac{1}{n} \sum_{i=1}^{n} x_{i}\right)\left(\sum_{i=1}^{n} \frac{1}{1-x_{i} x_{\sigma(i)}}\right) .
$$
