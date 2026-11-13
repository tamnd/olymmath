---
tag: XAV169GWEN
kind: problem
type: answer
answer: "1979"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=110123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a four-digit number that satisfies the following conditions:
(1) If the units digit and the hundreds digit, as well as the tens digit and the thousands digit, are simultaneously swapped, then its value increases by 5940;
(2) When divided by 9, the remainder is 8.
Find the smallest odd number among these four-digit numbers.
(Shandong Province, China Mathematics Competition, 1979)
