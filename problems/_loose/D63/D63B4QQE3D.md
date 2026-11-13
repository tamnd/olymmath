---
tag: D63B4QQE3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a positive integer balanced if
- it has six digits,
- each of its six digits is non-zero, and
- the product of its first three digits is equal to the product of its last three digits.
For example, 241181 is balanced since no digit equals zero and $2 \times 4 \times 1=1 \times 8 \times 1$.
(a) Determine, with justification, all balanced positive integers of the form $3 b 8 d 5 f$.
(b) Determine, with justification, a three-digit positive integer of the form $4 b c$ for which there are exactly three balanced positive integers of the form $4 b c$ def.
(c) For each of $k=4,5,6,7,8,9,10$, either
- determine, with justification, an integer $a b c$ for which there are exactly $k$ balanced positive integers of the form $a b c$ def, or
- justify why there does not exist an integer $a b c$ for which there are exactly $k$ balanced positive integers of the form abc def.
