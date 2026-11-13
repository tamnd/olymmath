---
tag: WQWQ3B98BZ
kind: problem
type: answer
answer: '{9,11},{12,36},{135,19},{144,19}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114668
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pair of positive integers is called "compatible" if and only if one of the numbers is the sum of the digits of the two numbers, and the other number is the product of the digits of the two numbers. Try to find:
(1) all compatible pairs of positive integers within 100;
(2) all compatible pairs of positive integers within 1000, where one of the numbers is greater than 99.
