---
tag: XJPGQ1EZ7X
kind: problem
type: answer
answer: '{1,3,\ldots,1981}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189711
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the set $S$ with the smallest number of elements for which the following conditions are satisfied:
a) $S \subset\{0,1,2,3, \ldots\}$,

b) $1981 \in S$,

c) If $x, y, z \in S$, then the remainder of the division of $x+y+z$ by 1982 also belongs to $S$.
