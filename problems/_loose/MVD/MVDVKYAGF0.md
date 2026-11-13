---
tag: MVDVKYAGF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a finite set, $t$ be a positive integer, and $F$ be a family of $t$ subsets:
$$
F=\left\{A_{1}, A_{2}, \cdots, A_{t}\right\} \text {. }
$$

If a subfamily $S$ of $F$ satisfies: for any two distinct sets $A, B$ in $S$, neither $A \subset B$ nor $B \subset A$ holds, then $S$ is called an "antichain". Let $S_{1}$ be the antichain containing the maximum number of sets, and $S_{2}$ be any antichain. Prove: there exists an injection $f$ from $S_{2}$ to $S_{1}$, such that for any $A \in S_{2}$, $f(A) \subset A$ or $A \subset f(A)$ holds.
