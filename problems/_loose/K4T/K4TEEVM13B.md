---
tag: K4TEEVM13B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78080
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A mathematics camp contains exactly one million students, some of whom are friends (if $A$ is a friend of $B$, then $B$ is a friend of $A$).

a) Suppose that each student has at most two friends. Show that it is possible to line up the students in such a way that if two students are friends, there are at most 2017 students between them.

b) Now suppose that each student has at most three friends. Show that this is no longer necessarily possible.
