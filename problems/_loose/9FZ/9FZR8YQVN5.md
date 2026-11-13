---
tag: 9FZR8YQVN5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2015552
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36064
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1989
    source: hf-ai-mo-aops
    label: 1989 National High School Mathematics League
---
Given $n\times n$ square table, fill in each square with $-1$ or $1$ . For $n$ squares that any two of them are neither in the same line nor in the same column, we call the product of the numbers in the squares *basic term*. Prove that she sum of all *basic terms* is always a multiple of $4$ .
