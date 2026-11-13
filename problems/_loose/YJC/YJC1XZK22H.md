---
tag: YJC1XZK22H
kind: problem
type: answer
answer: all\n\such\that\n+1\is\
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ boxes initially contain $1,2, \ldots, n$ marbles respectively ( $n \geq 1$ ). Charlotte first adds a marble to each box. Then she adds a marble to each box in which the number of marbles is divisible by 2 , then a marble to each box in which the number of marbles is divisible by 3 , and so on, until she adds a marble to each box in which the number of marbles is divisible by $n$. For which values of $n$ does the procedure end with exactly $n+1$ marbles in every box?
