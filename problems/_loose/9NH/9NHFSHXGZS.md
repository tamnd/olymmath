---
tag: 9NHFSHXGZS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Latin squares.) Consider the numbers $1,2, \ldots, n$, and from them form $n \times n$ matrices ('squares') with the property that each digit appears only once in each row and each column. For $n=2$, examples are the squares

| 1 | 2 |
| :--- | :--- |
| 2 | 1 |, $ $ | 2 | 1 |
| :--- | :--- |
| 1 | 2 |.

For $n=3$, examples are the squares

| 1 | 2 | 3 |
| :--- | :--- | :--- |
| 2 | 3 | 1 |
| 3 | 1 | 2 |, $ $ | 1 | 2 | 3 |
| :--- | :--- | :--- |
| 3 | 1 | 2 |
| 2 | 3 | 1 |.

Let $L_{n}$ be the number of Latin squares of size $n \times n$.

Show that

$$
L_{n} \geqslant n!(n-1)!\ldots 1! \left(=\prod_{k=1}^{n} k!\right)
$$

Remark. The problem of obtaining exact formulas for $L_{n}$ is very difficult. (Some values: $L_{2}=2, L_{3}=12, L_{4}=576$.) It is known that asymptotically

$$
\ln L_{n}=n^{2} \ln n+O\left(n^{2}\right), n \rightarrow \infty
$$
