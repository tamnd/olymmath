---
tag: TP81RAV0Q3
kind: problem
type: answer
answer: '[e\cdotn!]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110144
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n \geq 3$. Several people attend a meeting, some of whom know each other. If some people can sit around a round table such that adjacent people all know each other, this is called a "good" seating arrangement. It is known that these people cannot be divided into $n$ groups such that no one in each group knows anyone else. Find the largest positive integer $N$, such that there must be at least one person who can participate in $N$ different "good" seating arrangements.
※A "good" seating arrangement can consist of 1 person or 2 people who know each other, and any seating arrangements that are equivalent by rotation are considered the same.
