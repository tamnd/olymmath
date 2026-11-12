---
tag: DTB45JC3HR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The table has 4 rows. In the first row, arbitrary natural numbers are written, which may include identical ones. The second row is filled as follows: from left to right, the numbers in the first row are examined, and under the number $a$, the number $k$ is written if $a$ appears for the $k$-th time in the first row. Similarly, the third row is written based on the second row, and the fourth row is written based on the third row.

Prove that the second and fourth rows are always the same.
