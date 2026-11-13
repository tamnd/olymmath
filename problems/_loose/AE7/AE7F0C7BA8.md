---
tag: AE7F0C7BA8
kind: problem
type: answer
answer: "2013"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229431
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Navi and Ozna are playing a game where Ozna starts first and the two take turn making moves. A positive integer is written on the waord. A move is to (i) subtract any positive integer at most 2015 from it or (ii) given that the integer on the board is divisible by $2014$, divide by $2014$. The first person to make the integer $0$ wins. To make Navi's condition worse, Ozna gets to pick integers $a$ and $b$, $a\ge 2015$ such that all numbers of the form $an+b$ will not be the starting integer, where $n$ is any positive integer.

Find the minimum number of starting integer where Navi wins.
