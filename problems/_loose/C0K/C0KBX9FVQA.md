---
tag: C0KBX9FVQA
kind: problem
type: answer
answer: Allpositiveintegerscoprimewith10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=144326
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a positive integer with $b$ digits, $l, r \in \mathbf{N}$, and $l+r<b$, a positive integer is called a "sub-factor" of $n$ if and only if it divides the positive integer obtained by removing the first $l$ digits and the last $r$ digits of $n$. For example, the sub-factors of 143 are $1, 2, 3, 4, 7, 11, 13, 14, 43$, and 143.

For any positive integer $d$, let $A_{d}$ be the set of positive integers such that $d$ is not a sub-factor of any element in the set. Find all positive integers $d$ such that the set $A_{d}$ is finite.
