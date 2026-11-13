---
tag: J08VK8EP9X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any subset $U$ of the set of real numbers $\mathbb{R}$, we define the function on $\mathbb{R}$ as
$$
f_{U}(x)=\left\{\begin{array}{ll}
1 & x \in U \\
0 & x \notin U
\end{array} .\right.
$$

If $A, B$ are two subsets of the set of real numbers $\mathbb{R}$, then $f_{A}(x)+f_{B}(x) \equiv 1$ if and only if $A, B$ are complements of each other.
