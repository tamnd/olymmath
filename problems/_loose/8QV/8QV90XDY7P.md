---
tag: 8QV90XDY7P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that$$p (n)= 2+ \left (p (1) + \cdots + p\left ( \left [\frac {n}{2} \right ] + \chi_1 (n)\right ) + \left (p'_2(n) + \cdots + p' _{ \left [\frac {n}{2} \right ] - 1}(n)\right )\right )$$for every $n \in \mathbb {N}$ with $n>2$ where $\chi $ denotes the principal character Dirichlet modulo 2, i.e.$$ \chi _1 (n) = \begin{cases} 1 & \text{if } (n,2)=1 \\ 0 &\text{if } (n,2)>1 \end{cases} $$with $p (n) $ we denote number of possible partitions of $n $ and $p' _m(n) $ we denote the number of partitions of $n$ in exactly $m$ sumands.
