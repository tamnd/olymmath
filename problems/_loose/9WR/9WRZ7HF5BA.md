---
tag: 9WRZ7HF5BA
kind: problem
type: answer
answer: "6063"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a set interesting if it consists of 2022 strictly positive real numbers with the property that, when we write its elements in ascending order, no element is equal to the arithmetic mean of its neighbors.

For any set $A$, we attach the set $\widetilde{A}=\{x+y \mid x, y \in A\}$.

a) Determine the maximum possible cardinality of a set $\widetilde{A}$ when $A$ ranges over all interesting sets.

b) Determine the minimum possible cardinality of a set $\widetilde{A}$ when $A$ ranges over all interesting sets.
