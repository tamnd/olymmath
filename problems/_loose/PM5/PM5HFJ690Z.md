---
tag: PM5HFJ690Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=138857
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n$, let $p(n)$ denote the number of ways to partition $n$ into a sum of natural numbers (partitions differing only in the order of the summands are considered the same). For example, $p(4)=5$ (see the table on the right). The diversity of a partition is the number of distinct summands in the partition, and the sum of diversities is denoted by $q(n)$.
Prove: (1) $q(n)-1+p(1)+p(2)+\cdots+p(n-1)$;
(2) $1+p(1)+p(2)+\cdots+p(n-1) \leqslant \sqrt{2 n} p(n)$.
