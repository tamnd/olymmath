---
tag: Q60HKEVEF2
kind: problem
type: answer
answer: D
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73205
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A box contains 105 black balls, 89 gray balls, and 5 white balls. Outside the box, there are white balls in sufficient quantity to repeatedly perform the following procedure until only two balls remain in the box:

- two balls are removed from the box without looking;
- if the balls removed are of different colors, the darker one is returned to the box;
- otherwise, the balls removed are discarded, and a white ball is placed in the box.

Regarding the colors of the two remaining balls, it can be guaranteed that:

A) both will be white.

B) both will be gray.

C) both will be black.

D) exactly one will be black.

E) exactly one will be gray.
