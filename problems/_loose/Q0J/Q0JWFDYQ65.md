---
tag: Q0JWFDYQ65
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n> 2$ be an integer. A child has $n^2$ candies, which are distributed in $n$ boxes. An operation consists in choosing two boxes that together contain an even number of candies and redistribute the candy from those boxes so that both contain the same amount of candy. Determine all the values of $n$ for which the child, after some operations, can get each box containing $n$ candies, no matter which the initial distribution of candies is.
