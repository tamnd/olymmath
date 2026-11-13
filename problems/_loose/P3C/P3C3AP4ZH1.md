---
tag: P3C3AP4ZH1
kind: problem
type: answer
answer: 2^{2000}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90477
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $S$ is a set of 2001 positive integers, and $n$ different subsets of $S$ are chosen so that their sums are pairwise relatively prime. Find the maximum possible value of $n$. (Here the "sum" of a finite set of numbers means the sum of its elements; the empty set has sum 0.)
