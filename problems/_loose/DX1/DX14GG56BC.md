---
tag: DX14GG56BC
kind: problem
type: answer
answer: 80,20,A_{1}={3,4,5,\ldots,2016},A_{2}={1,2,4,5,\ldots,2016}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178063
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sets $A=\{1,2,3,4, \ldots, 2015,2016\}$, $B=\{x \in A \mid x$ is a multiple of 25$\}$ and $C=\{x \in B \mid x$ is a multiple of 4$\}$.

a. Determine the cardinality of the set $B$.

b. Determine the cardinality of the set $C$.

c. Determine the subsets of $A$ whose sum of elements is equal to 2033133.
