---
tag: KMTGEVGGR7
kind: problem
type: answer
answer: -n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85360
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 4$ be an integer. Consider a regular $2 n$-gon where each vertex is assigned an integer, which we call the value of that vertex. If four distinct vertices of this $2 n$-gon form a rectangle, then the sum of the values of these vertices is called a rectangle sum.

Determine for which integers (not necessarily positive) $m$ we can assign the numbers $m+1, m+2$, ..., $m+2 n$ as values to the vertices (in some order) so that every rectangle sum is a prime number. (Prime numbers are by definition positive.)
