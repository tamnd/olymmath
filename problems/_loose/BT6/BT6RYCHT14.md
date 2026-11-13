---
tag: BT6RYCHT14
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ students, numbered from $1$ to $n$ are sitting next to each other in a class. In the beginning the $1$st student has $n$ pieces of paper in one pile. The goal of the students is to distribute the $n$ pieces in a way that everyone gets exactly one. The teacher claps once in a minute and for each clap the students can choose one of the following moves (or do nothing):
$\bullet$ They divide one of their piles of paper into two smaller piles.
$\bullet$ They give one of their piles of paper to the student with the next number.
At least how many times does the teacher need to clap in order to make it possible for the students to distribute all the pieces of paper amongst themselves?
