---
tag: 76KB70FEMQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114612
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
1 All the chairs in a classroom are arranged in a square $n \times n$ array (in other words, $n$ columns and $n$ rows), and every chair is occupied by a student. The teacher decides to rearrange the students according to the following two rules:
(a) Every student must move to a new chair.
(b) A student can only move to an adjacent chair in the same row or to an adjacent chair in the same column. In other words, each student can move only one chair horizontally or vertically.
(Note that the rules above allow two students in adjacent chairs to exchange places.)
Show that this procedure can be done if $n$ is even, and cannot be done if $n$ is odd.
