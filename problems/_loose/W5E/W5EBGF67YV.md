---
tag: W5EBGF67YV
kind: problem
type: answer
answer: 80or66
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20798
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
With the number written on the board, one of the following operations is allowed:
1) Replace the original number with the difference between the number obtained by removing the last four digits and the number formed by the last four digits (possibly written in an improper form - with leading zeros; the difference is taken as positive - from the larger number subtract the smaller one).
2) If the original number has three consecutive digits $a>0, b<2$ (in that exact order), it is allowed to replace them with the digits $a-1, b+3$ and $c-3$ respectively. If zeros appear at the beginning of the number as a result, they are discarded.

Initially, the number consisting of one hundred fives was written on the board. In the end, a two-digit number remained. What exactly is it?
