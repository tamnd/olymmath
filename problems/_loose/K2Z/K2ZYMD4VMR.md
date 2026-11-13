---
tag: K2ZYMD4VMR
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217541
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive integer $n$ for which the number $$ A_n = \prod_{k=1}^n \binom{k^2}{k} = \binom{1}{1} \binom{4}{2} \cdots \binom{n^2}{n} $$ ends in the digit $0$ when written in base ten.

*Proposed by Evan Chen*
