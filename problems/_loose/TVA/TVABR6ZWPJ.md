---
tag: TVABR6ZWPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73475
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer is cool if by summing the squares of its digits and repeating this operation successively, we obtain the number 1. For example, 1900 is cool, since

$$
1900 \rightarrow 82 \rightarrow 68 \rightarrow 100 \rightarrow 1
$$

a) Find two consecutive two-digit cool numbers.

b) Verify that for all $n>2020$ there exist two consecutive cool numbers of $n$ digits.
