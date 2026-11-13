---
tag: V69MTEG7BW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n \geqq 3$ points on a circle, we arbitrarily number them with positive integers from 1 to $n$. Then, we say that two non-adjacent points $A$ and $B$ are "connectable" if, among the two arcs between them, at least one arc has all points labeled with numbers smaller than those of both $A$ and $B$. Prove that the number of "connectable" point pairs is $n-3$.
