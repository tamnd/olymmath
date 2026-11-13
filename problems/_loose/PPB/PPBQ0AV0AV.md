---
tag: PPBQ0AV0AV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, ($n\ge 2$), find the number of sets with $2n + 1$ points $P_0, P_1,..., P_{2n}$ in the coordinate plane satisfying the following as its elements:
- $P_0 = (0, 0),P_{2n}= (n, n)$
- For all $i = 1,2,..., 2n - 1$, line $P_iP_{i+1}$ is parallel to $x$-axis or $y$-axis and its length is $1$.
- Out of $2n$ lines$P_0P_1, P_1P_2,..., P_{2n-1}P_{2n}$, there are exactly $4$ lines that are enclosed in the domain $y \le x$.
