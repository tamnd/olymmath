---
tag: NP6MQZ5XPX
kind: problem
type: answer
answer: (8,1,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85448
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all triples $(a, b, c)$ of positive integers with $a+b+c=10$ such that there exist $a$ red, $b$ blue, and $c$ green points (all distinct) in the plane with the following properties:

- for each red point and each blue point, we consider the distance between these two points; the sum of all these distances is 37;
- for each green point and each red point, we consider the distance between these two points; the sum of all these distances is 30;
- for each blue point and each green point, we consider the distance between these two points; the sum of all these distances is 1;
