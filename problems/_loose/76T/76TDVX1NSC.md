---
tag: 76TDVX1NSC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=113562
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $m \geqslant 3$, partition the set $\{1,2, \cdots, m\}$ into the union of two non-empty, disjoint sets $A$ and $B$, where set $B$ contains at least two elements. Now, move an element $p$ from set $B$ to set $A$, such that the arithmetic mean of the numbers in set $A$ increases by $u$, and the arithmetic mean of the numbers in set $B$ increases by $v$. Prove (or provide a counterexample to disprove):
$$
\min \{u, v\} \leqslant \frac{1}{2} .
$$
