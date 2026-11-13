---
tag: ZXCBZRXXAY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109564
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 3$. The set $A=\left\{\left(x_{1}, x_{2}, \ldots, x_{n}\right) \mid x_{1}, x_{2}, \ldots, x_{n} \in\{1,2, \ldots, 6063\}\right\}$. Determine whether it is possible to partition the elements of $A$ into groups, each containing 3 elements, such that the 3 elements in each group form an equilateral triangle.
(Note: If 3 $n$-tuples have equal pairwise distances, we say they form an equilateral triangle. The distance between two $n$-tuples $\left(x_{1}, x_{2}, \ldots, x_{n}\right)$ and $\left(y_{1}, y_{2}, \ldots, y_{n}\right)$ is defined as $\sqrt{\left(x_{1}-y_{1}\right)^{2}+\left(x_{2}-y_{2}\right)^{2}+\ldots+\left(x_{n}-y_{n}\right)^{2}}$. )
