---
tag: D4FV8F9BGC
kind: problem
type: answer
answer: 88or94
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20791
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With the number written on the board, one of the following operations is allowed:
1) Replace the original number with the difference between the number obtained by removing the last three digits and the number formed by the last three digits (which may be written in an improper form - with leading zeros; the difference is taken as positive - from the larger number subtract the smaller one).
2) If the original number contains a digit not equal to 9, which has two neighboring digits greater than 0, this digit can be increased by 1, and the neighboring digits can be decreased by 1. If zeros appear at the beginning of the number as a result, they are discarded.

Initially, the number consisting of 98 eights was written on the board. In the end, a two-digit number remained. What exactly is it?
