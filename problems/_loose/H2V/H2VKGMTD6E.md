---
tag: H2VKGMTD6E
kind: problem
type: answer
answer: \frac{n}{1} + \frac{n}{2} + \cdots + \frac{n}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268994
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n+1$ squares in a row, labelled from 0 to $n$. Tony starts with $k$ stones on square 0. On each move, he may choose a stone and advance the stone up to $m$ squares where $m$ is the number of stones on the same square (including itself) or behind it.

Tony's goal is to get all stones to square $n$. Show that Tony cannot achieve his goal in fewer than $\frac{n}{1} + \frac{n}{2} + \cdots + \frac{n}{k}$ moves.

*Proposed by Tony Wang*
