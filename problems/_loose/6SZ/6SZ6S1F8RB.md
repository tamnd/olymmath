---
tag: 6SZ6S1F8RB
kind: problem
type: answer
answer: "489"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124211
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 10 points on a plane, no three of which are collinear, draw 4 line segments, each connecting two of the points. These line segments are chosen arbitrarily, and each has an equal chance of being selected. The probability that three of these line segments form a triangle with three of the given 10 points as vertices is $\frac{m}{n}$, where $m, n$ are coprime positive integers. Find $m+n$.
