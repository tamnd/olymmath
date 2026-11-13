---
tag: 5ZWXRK6VFR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Brazil National Olympiad
    url: https://artofproblemsolving.com/community/c6h2775978
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=32452
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=231569
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm/2021
    source: hf-ai-mo-aops
    label: 2021 Brazil National Olympiad
---
Let $n$ be a positive integer. On a $2 \times 3 n$ board, we mark some squares, so that any square (marked or not) is adjacent to at most two other distinct marked squares (two squares are adjacent when they are distinct and have at least one vertex in common, i.e. they are horizontal, vertical or diagonal neighbors; a square is not adjacent to itself).

(a) What is the greatest possible number of marked square?
(b) For this maximum number, in how many ways can we mark the squares? configurations that can be achieved through rotation or reflection are considered distinct.
