---
tag: N1J9HSNPJ4
kind: problem
type: answer
answer: "2007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=160541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Numbers $1,2, \ldots, 2010$ are placed on the circumference of a circle in some order. The numbers $i$ and $j$, where $i \neq j$ and $i, j \in\{1,2, \ldots, 2010\}$ form a friendly pair if
(i) $i$ and $j$ are not neighbours to each other, and
(ii) on one or both of the arcs connecting $i$ and $j$ along the circle, all numbers in between them are greater than both $i$ and $j$.
Determine the minimal number of friendly pairs.
