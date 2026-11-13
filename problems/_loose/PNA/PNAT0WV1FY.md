---
tag: PNAT0WV1FY
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161145
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $n \geqslant 2$ for which there exist mutually distinct real numbers $a_{1}, a_{2}, \ldots, a_{n}$ such that the following two conditions are satisfied:

- when each of these $n$ numbers is replaced by the sum of the remaining $n-1$ numbers (all except it), the same set of numbers is obtained;
- there is no partition of these $n$ numbers into two non-empty disjoint sets such that the sums of the $(n+1)$-th powers of the elements of these sets are equal.
