---
tag: BFQHDSF1BK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ pairwise distinct numbers. It is required to find the largest of them, comparing a pair of numbers at each step.

a) Prove that this can be done in $n-1$ steps.

b) Prove that this cannot be done in fewer than $n-1$ steps.

Many different sorting algorithms are known. Here we will discuss some of them.

Insertion sort works as follows. First, we compare $a_{1}$ and $a_{2}$ and, if necessary, swap them. Then, in the new sequence, we compare $a_{3}$ and $a_{2}$ (here $a_{2}$ is the element that stands in the 2nd position in the new sequence) and, if necessary, swap them. If the elements $a_{3}$ and $a_{2}$ had to be swapped, we then compare $a_{3}$ and $a_{1}$, and so on.
