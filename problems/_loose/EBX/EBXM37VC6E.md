---
tag: EBXM37VC6E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_1,x_2,\dots,x_{31}$ be real numbers. Then find the maximum value can
$$\sum_{i,j=1,2,\dots,31, i\neq j}{\lceil x_ix_j \rceil }-30\left(\sum_{i=1,2,\dots,31}{\lfloor x_i^2 \rfloor } \right)$$
achieve.
P.S.: For a real number $x$ we denote the smallest integer that does not subseed $x$ by $\lceil x \rceil$ and the biggest integer that does not exceed $x$ by $\lfloor x \rfloor$. For example $\lceil 2.7 \rceil=3$, $\lfloor 2.7 \rfloor=2$ and $\lfloor 4 \rfloor=\lceil 4 \rceil=4$
