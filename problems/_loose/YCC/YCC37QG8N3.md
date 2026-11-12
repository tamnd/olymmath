---
tag: YCC37QG8N3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38545
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that the number of permutations $a_{1}, \ldots, a_{n}$ of the numbers $1, \ldots, n$, for which $a_{i} \neq i$ for all $i$, is

$$
n!\left(1-1+\frac{1}{2!}-\frac{1}{3!}+\ldots+\frac{(-1)^{k}}{k!}+\ldots+\frac{(-1)^{n}}{n!}\right)
$$

b) Prove that the proportion of such permutations among all permutations tends to $1 / e$ as $n \rightarrow \infty$.
