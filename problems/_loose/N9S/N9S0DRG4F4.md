---
tag: N9S0DRG4F4
kind: problem
type: answer
answer: x_i=\frac{(-1)^i}{i+1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=148770
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An infinite sequence $ x_{0},x_{1},x_{2},\ldots \,$ of real numbers is said to be **bounded** if there is a constant $ C\,$ such that $ \vert x_{i} \vert \leq C\,$ for every $ i\geq 0$. Given any real number $ a > 1,\,$ construct a bounded infinite sequence $ x_{0},x_{1},x_{2},\ldots \,$ such that
$$ \vert x_{i} - x_{j} \vert \vert i - j \vert^{a}\geq 1
$$
for every pair of distinct nonnegative integers $ i, j$.
