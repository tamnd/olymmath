---
tag: NR6TFE1Q3C
kind: problem
type: answer
answer: m(n) = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A set $S$ of unit cells of an $n\times n$ array, $n\geq 2$, is said *full* if each row and each column of the array contain at least one element of $S$, but which has this property no more when any of its elements is removed. A full set having maximum cardinality is said *fat*, while a full set of minimum cardinality is said *meagre*.

i) Determine the cardinality $m(n)$ of the meagre sets, describe all meagre sets and give their count.
ii) Determine the cardinality $M(n)$ of the fat sets, describe all fat sets and give their count.

*(Dan Schwarz)*
