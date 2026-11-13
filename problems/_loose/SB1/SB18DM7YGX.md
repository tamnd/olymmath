---
tag: SB18DM7YGX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85500
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alicia writes $a$ different integers on a piece of paper and Britt writes $b$ different integers on another piece of paper. Alicia has at least one number that Britt does not have, and Britt has at least one number that Alicia does not have. Vera counts how many different numbers are on the two pieces of paper together; call this number $v$. Daan counts how many of the numbers that Alicia has written are also written by Britt; call this number $d$. For example, if Alicia writes the numbers 1, 2, and 5, and Britt writes the numbers 2, 5, 7, and 8, then $a=3$ and $b=4$ while $v=5$ and $d=2$.

(a) Find an example where $a=b=2022$ and $a \cdot b=d \cdot(v+d)$.

(b) Is it possible that $a \cdot b=d \cdot(v+4)$? Give an example or prove that this is not possible.

(c) Is it possible that $a \cdot b=d \cdot v$? Give an example or prove that this is not possible.
