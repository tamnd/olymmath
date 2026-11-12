---
tag: FHEKWW7FBT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20925
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With the number written on the board, one of the following operations is allowed:
1) If there is a digit in the original number that is not equal to 9 and has two neighboring digits greater than 0, you can increase this digit by 1, and decrease the neighboring digits by 1.
2) Subtract 1 from any non-zero digit except the last one, and add 3 to the next digit.
3) Decrease any sufficiently large digit by 7.

If, as a result of any of these operations, there are zeros in the number on one or more of the leading positions, they are automatically discarded.

Initially, the number consisting of one hundred nines was written on the board. In the end, a single-digit number remained. Which one exactly?
