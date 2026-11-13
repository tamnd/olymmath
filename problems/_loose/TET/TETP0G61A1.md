---
tag: TETP0G61A1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=107520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A spy organization $S$ has $n(n \geqslant 2)$ spies, and between any two spies, they either do not know each other or have a leader-subordinate relationship. Prove: It is always possible to divide $S$ into three disjoint subsets $A, B, C$ that satisfy the following conditions:
(1) Spies in $A$ do not know each other;
(2) For any $b \in B$, there exists $a \in A$ such that $a$ leads $b$;
(3) For any $c \in C$, there exists $b \in B$ such that $b$ leads $c$;
(4) $|A \cup B|>\sqrt{n}$.
