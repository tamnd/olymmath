---
tag: BZM5QSQ4RH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96982
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 2$, divide the set $\{1,2, \cdots, n\}$ into $k$ non-empty subsets $A_{1}, A_{2}, \cdots, A_{k}$ (the order of subsets does not matter), such that
$$
A_{1} \cup A_{2} \cup \cdots \cup A_{k}=\{1,2, \cdots, n\},
$$

and for any $1 \leqslant i<j \leqslant k$, we have $A_{i} \cap A_{j} \neq \varnothing$, then the unordered subset group $\left(A_{1}, A_{2}, \cdots, A_{k}\right)$ is called an unordered $k$-partition of the set $\{1,2, \cdots, n\}$.

Calculating the number of all different unordered $k$-partitions $S(n, k)$ of the set $\{1,2, \cdots, n\}$ (known as the second kind of Stirling (Stirling) number) is a problem of considerable difficulty.
