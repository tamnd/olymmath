---
tag: KJW5G47VZW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1}, \ldots, A_{n}$ be subsets of a finite set $A$, and $d_{1}, \ldots, d_{n} \in \mathbf{N}$. Prove: For all $k \leqslant n$, there exist disjoint subsets $D_{k} \subseteq A_{k}$ such that $\left|D_{k}\right|=d_{k}$ if and only if for all $I \subseteq\{1, \ldots, n\}$ we have
$$
\left|\bigcup_{i \in I} A_{i}\right| \geqslant \sum_{i \in I} d_{i} .
$$
