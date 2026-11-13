---
tag: MA8TDVY6J6
kind: problem
type: answer
answer: \left\lfloor \frac{n}{2} \right\rfloor + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214816
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer.
Determine the number of sequences $a_0, a_1, \ldots, a_n$ with terms in the set $\{0,1,2,3\}$ such that $$n=a_0+2a_1+2^2a_2+\ldots+2^na_n.$$
