---
tag: V0KTJ8YPSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268985
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a set with 10 distinct elements. A set $T$ of subsets of $S$ (possibly containing the empty set) is called *union-closed* if, for all $A, B \in T$, it is true that $A \cup B \in T$. Show that the number of union-closed sets $T$ is less than $2^{1023}$.

*Proposed by Tony Wang*
