---
tag: 2DE3P2M8FJ
kind: problem
type: answer
answer: 4n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75633
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Pavel alternately writes crosses and circles into the cells of a table (starting with a cross). When the table is completely filled, the final score is calculated as the sum $X+O$, where $X$ is the number of rows containing more crosses than circles and $O$ is the number of columns containing more circles than crosses. Determine the highest possible score achievable for a table of size $(2 n+1) \times (2 n+1)$ depending on the natural number $n$.
