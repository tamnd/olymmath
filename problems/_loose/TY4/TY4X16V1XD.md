---
tag: TY4X16V1XD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77934
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A finite simple graph $\mathrm{G}$ with $\mathrm{n}$ vertices is said to be divisible if it is possible to assign a number $n_{s}$ to each vertex $s$ of $\mathrm{G}$ such that any two distinct vertices always have two distinct numbers and any two vertices $s$ and $s^{\prime}$ are connected by an edge if and only if $n_{s} \mid n_{s^{\prime}}$ or $n_{s^{\prime}} \mid n_{s}$.

A finite simple graph $\mathrm{G}$ with $\mathrm{n}$ vertices is said to be permutable if it is possible to number the vertices of $G$ from 1 to $n$ and if there exists a permutation $\sigma$ of $\{1, \ldots, n\}$ such that the vertices with numbers $i$ and $j$ are connected by an edge if and only if $(\mathfrak{i}-\mathfrak{j})(\sigma(\mathfrak{i})-\sigma(\mathfrak{j}))<0$.

Show that a graph $\mathrm{G}$ is permutable if and only if $\mathrm{G}$ and its complement are divisible.
