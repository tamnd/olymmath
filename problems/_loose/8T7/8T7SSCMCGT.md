---
tag: 8T7SSCMCGT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For positive integers $k$ and $n$, express the number of permutation $P=x_1x_2...x_{2n}$ consisting of $A$ and $B$ that satisfies all three of the following conditions, using $k$ and $n$.

$ $ $ $ $(i)$ $A, B$ appear exactly $n$ times respectively in $P$.

$ $ $ $ $(ii)$ For each $1\le i\le n$, if we denote the number of $A$ in $x_1,x_2,...,x_i$ as $a_i$ $,$ then $\mid 2a_i -i\mid \le 1$.

$ $ $ $ $(iii)$ $AB$ appears exactly $k$ times in $P$. (For example, $AB$ appears 3 times in $ABBABAAB$)
