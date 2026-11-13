---
tag: 8K6HTE4E8Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S=\{1,2, \ldots, n\}$. To each element $i \in S$ we associate a non-empty subset $S_{i} \subset S$ such that:

a) for any numbers $i, j \in S$ it holds: $j \in S_{i} \Rightarrow i \in S_{j}$,

b) for any distinct numbers $i, j \in S$ it holds:

$$
\left|S_{i}\right|=\left|S_{j}\right| \Rightarrow S_{i} \cap S_{j}=\varnothing
$$

Prove that there exists a number $k \in S$ such that $\left|S_{k}\right|=1$.
