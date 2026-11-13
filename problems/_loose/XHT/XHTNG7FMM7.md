---
tag: XHTNG7FMM7
kind: problem
type: answer
answer: "203"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6 positive integers $a, b, c, d, e, f$ are arranged in a row in alphabetical order, forming a sequence, where $a=1$. If a certain positive integer is greater than 1, then the number that is 1 less than this positive integer must appear to its left. For example, if $d>1$, then one of $a, b, c$ must be $d-1$. Examples: $1,1,2,1,3,2$ meets the requirement; $1,2,3,1,4,1$ meets the requirement; $1,2,2,4,3,2$ does not meet the requirement. The number of different permutations that meet the requirement is $ $.
