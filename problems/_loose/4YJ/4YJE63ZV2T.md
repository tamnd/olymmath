---
tag: 4YJE63ZV2T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247414
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \ge 6$ be an integer. We have at our disposal $n$ colors. We color each of the unit squares of an $n \times n$ board with one of the $n$ colors.
a) Prove that, for any such coloring, there exists a path of a chess knight from the bottom-left to the upper-right corner, that does not use all the colors.
b) Prove that, if we reduce the number of colors to $\lfloor 2n/3 \rfloor + 2$, then the statement from a) is true for infinitely many values of $n$ and it is false also for infinitely many values of $n$
