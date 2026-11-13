---
tag: 8FEY0CXQ5Z
kind: problem
type: answer
answer: "465"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Georgina calls a $992$-element subset $A$ of the set $S = \{1, 2, 3, \ldots , 1984\}$ a **halfthink set** if

- the sum of the elements in $A$ is equal to half of the sum of the elements in $S$, and

- exactly one pair of elements in $A$ differs by $1$.

She notices that for some values of $n$, with $n$ a positive integer between $1$ and $1983$, inclusive, there are no halfthink sets containing both $n$ and $n+1$. Find the last three digits of the product of all possible values of $n$.

*Proposed by Andrew Wu and Jason Wang*
