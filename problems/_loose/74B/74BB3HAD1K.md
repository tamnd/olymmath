---
tag: 74BB3HAD1K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $90$ cards and two different digits are written on each one: $01$, $02$, $03$, $04$, $05$, $06$, $07$, $08$, $09$, $10$, $12$, and so on up to $98$. A set of cards is *correct *if it does not contain any cards whose first digit is the same as the second digit of another card in the set. We call the *value *of a set of cards the sum of the numbers written on each card. For example, the four cards $04$, $35$, $78$ and $98$ form a correct set and their value is $215$, since$ 04+35+78+98=215$. Find a correct set that has the largest possible value. Explain why it is impossible to achieve a correct set of higher value.
