---
tag: ZDD533YDCA
kind: problem
type: answer
answer: 4n^3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231699
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. A sequence $(a, b, c)$ of $a, b, c \in \{1, 2, . . . , 2n\}$ is called *joke * if its shortest term is odd and if only that smallest term, or no term, is repeated. For example, the sequences $(4, 5, 3)$ and $(3, 8, 3)$ are jokes, but $(3, 2, 7)$ and $(3, 8, 8)$ are not. Determine the number of joke sequences in terms of $n$.
