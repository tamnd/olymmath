---
tag: EGJ42WR6ER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all $n$-tuples of real numbers, with the property that among the numbers $x_1,\frac{x_1+x_2}2,\ldots,\frac{x_1+x_2+\ldots+x_n}n$ the least is equal to $0$, and the greatest is equal to $1$. Determine
$$\max_{(x_1,x_2,\ldots,x_n)\in S}\max_{1\le i,j\le n}(x_i-x_j) \text{and}\min_{(x_1,x_2,\ldots,x_n)\in S}\max_{1\le i,j\le n}(x_i-x_j).$$
