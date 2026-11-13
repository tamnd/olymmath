---
tag: 6BZNXFX1DN
kind: problem
type: answer
answer: n = 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A partition of a positive integer is even if all its elements are even numbers. Similarly, a partition
is odd if all its elements are odd. Determine all positive integers $n$ such that the number of even partitions of
$n$ is equal to the number of odd partitions of $n$.
Remark: A partition of a positive integer $n$ is a non-decreasing sequence of positive integers whose sum of
elements equals $n$. For example, $(2; 3; 4), (1; 2; 2; 2; 2)$ and $(9) $ are partitions of $9.$
