---
tag: 5P4A6CDNCF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=125099
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Partition the set of natural numbers $N$ into two disjoint subsets $A$ and $B$, satisfying the following conditions:
(1) $1 \in A$;
(2) The sum of any two different elements in $A$ cannot be written in the form $2^{h}+2$, where $h = 0,1,2 \cdots$;
(3) Elements in $B$ also have the property described in (2).

Prove that this partition is uniquely determined and determine which subsets 1987, 1988, and 1989 belong to.
