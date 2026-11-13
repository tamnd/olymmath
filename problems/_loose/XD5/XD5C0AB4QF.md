---
tag: XD5C0AB4QF
kind: problem
type: answer
answer: 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268338
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider all binary sequences of length $n$. In a sequence that allows the interchange of positions of an arbitrary set of $k$ adjacent numbers, ($k < n$), two sequences are said to be *equivalent * if they can be transformed from one sequence to another by a finite number of transitions as above. Find the number of sequences that are not equivalent.
