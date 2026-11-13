---
tag: 2PMVSM8S66
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205181
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
You are given a positive integer $n$. What is the largest possible number of numbers that can be chosen from the set
$\{1, 2, \ldots, 2n\}$ so that there are no two chosen numbers $x > y$ for which $x - y = (x, y)$?

Here $(x, y)$ denotes the greatest common divisor of $x, y$.

*Proposed by Anton Trygub*
