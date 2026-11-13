---
tag: HHBZX7XS6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a non-empty set composed of positive integers. Suppose there exist positive integers $b_{1}, b_{2}, \cdots, b_{n}$ and $c_{1}, c_{2}, \cdots, c_{n}$, such that
(1) For each $i \in\{1,2, \cdots, n\}$, the set $b_{i} A+c_{i}=\left\{b_{i} a+c_{i} \mid a \in A\right\}$ is a subset of $A$;
(2) When $i \neq j$, the intersection of the sets $b_{i} A+c_{i}$ and $b_{j} A+c_{j}$ is empty, where $i, j \in \{1,2, \cdots, n\}$.
Prove: $\frac{1}{b_{1}}+\frac{1}{b_{2}}+\cdots+\frac{1}{b_{n}} \leqslant 1$.
