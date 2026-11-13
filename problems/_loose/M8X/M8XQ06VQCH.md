---
tag: M8XQ06VQCH
kind: problem
type: answer
answer: "648"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265660
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Say that a sequence $a_1$, $a_2$, $a_3$, $a_4$, $a_5$, $a_6$, $a_7$, $a_8$ is *cool* if
* the sequence contains each of the integers 1 through 8 exactly once, and
* every pair of consecutive terms in the sequence are relatively prime. In other words, $a_1$ and $a_2$ are relatively prime, $a_2$ and $a_3$ are relatively prime, $\ldots$, and $a_7$ and $a_8$ are relatively prime.

How many cool sequences are there?
