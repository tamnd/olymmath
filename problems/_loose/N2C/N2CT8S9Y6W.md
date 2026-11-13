---
tag: N2CT8S9Y6W
kind: problem
type: answer
answer: "3033"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=143966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a finite set $A$ consisting of positive integers, if $A$ is divided into two non-empty disjoint subsets $A_{1}$ and $A_{2}$, and the least common multiple (LCM) of the elements in $A_{1}$ equals the greatest common divisor (GCD) of the elements in $A_{2}$, then such a partition is called "good." Find the minimum value of the positive integer $n$ such that there exists a set of $n$ positive integers with exactly 2021 good partitions.
