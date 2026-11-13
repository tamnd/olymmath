---
tag: NNE30TTZGJ
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $n$ is good if we can color each side and diagonal of a regular $n$-gon in some color so that for any two vertices $A$ and $B$, there is exactly one vertex $C$, different from $A$ and $B$, such that the segments $\overline{A B}, \overline{B C}$, and $\overline{C A}$ are colored the same color.

Determine which of the numbers $7,8,9,10,11$, and 12 are good, and which are not.
