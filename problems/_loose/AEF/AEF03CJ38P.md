---
tag: AEF03CJ38P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101067
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $Q^{+}$ be the set of all positive rational numbers.
(1) Prove that $Q^{+}$ can be divided into 3 mutually disjoint subsets $A, B, C$, such that $B A = B, B^{2} = C, B C = A$, where for any two subsets $H$ and $K$ of $Q^{+}$, $H K = \{h k \mid h \in H, k \in K\}$, and $H^{2}$ denotes $H H$;
(2) Prove that the cubes of all positive rational numbers are in the subset $A$ of the above decomposition;
(3) Construct a decomposition $Q^{+} = A \cup B \cup C$ that satisfies the requirements in (1), such that for each positive integer $n \leqslant 34, n$ and $n+1$ are not both in $A$, i.e.,
$$
\min \{n \mid n \in N, n \in A, n+1 \in A\} > 34 .
$$
