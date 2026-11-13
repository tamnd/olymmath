---
tag: 4ZHA8GZDMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's prove that the first 1024 positive integers can be divided into two parts, each containing 512 elements $\left(x_{1}, x_{2}, \ldots, x_{512}\right)$ and $\left(y_{1}, y_{2}, \ldots, y_{512}\right)$, such that for every natural number $j<10$, the following equality holds:

$$
x_{1}^{j}+x_{2}^{j}+\ldots+x_{512}^{j}=y_{1}^{j}+y_{2}^{j}+\ldots+y_{512}^{j}
$$
