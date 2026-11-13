---
tag: G9FHCXE0CY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246807
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from an equilateral triangle with perimeter $P_0$, we carry out the following iterations: the first iteration consists of dividing each side of the triangle into three segments of equal length, construct an exterior equilateral triangle on each of the middle segments, and then remove these segments (bases of each new equilateral triangle formed). The second iteration consists of apply the same process of the first iteration on each segment of the resulting figure after the first iteration. Successively, follow the other iterations. Let $A_n$ be the area of the figure after the $n$- th iteration, and let $P_n$ the perimeter of the same figure. If $A_n = P_n$, find the value of $P_0$ (in its simplest form).
