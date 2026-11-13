---
tag: AG0E5C8QWR
kind: problem
type: answer
answer: "6"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181374
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A flea moves by jumping back and forth along a straight line. The flea's den is a point on the line. The jumping rules are as follows:

- if the flea is at a distance less than or equal to one meter from the den, after the next jump, it will be at a distance double the previous one, moving further away from the den.
- if the flea is at a distance $d$ greater than one meter from the den, after the next jump, it will be at a distance $\frac{1}{d}$ from the den but on the opposite side from where it is currently.

If after 5 jumps the flea is $80 \mathrm{~cm}$ from the den in a certain direction, in how many distinct sequences of jumps could it have reached that position?
