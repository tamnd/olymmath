---
tag: F22WTMEJG8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a 101-element subset $A$ of the set $S=\{1,2, \ldots, 1000000\}$.

Prove that for some $t_{1}, \ldots, t_{100}$ from $S$ the sets $A_{j}=\left\{x+t_{j} \mid x \in A ; j=1, \ldots, 100\right\}$ are pairwise disjoint.
