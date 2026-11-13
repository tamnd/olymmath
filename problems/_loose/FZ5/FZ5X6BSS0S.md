---
tag: FZ5X6BSS0S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The Hungarian mental calculator Pataki calculates the product $95 \cdot 97$ in the following way:

1) He adds the factors. $95+97=192$
2) He deletes the first digit of the sum. 92
3) He forms the difference of each of the two factors and the number 100 and multiplies these two numbers together. $5 \cdot 3=15$
4) He writes the result from (3) behind the result from (2) and gets 9215.

Investigate whether this method is valid for all factors between 90 and 100!
