---
tag: GCQ5E8NPA6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243370
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Oriol has a finite collection of cards, each one with a positive integer written on it. We say the collection is $n$-*complete* if for any integer $k$ from $1$ to $n$ (inclusive), he can choose some cards such that the sum of the numbers on them is exactly $k$. Suppose that Oriol's collection is $n$-complete, but it stops being $n$-complete if any card is removed from it. What is the maximum possible sum of the numbers on all the cards?

*Proposed by Ariel García*
