---
tag: XPH5HAYHCM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184726
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For squaring two-digit numbers that end with the digit 5, there is the following simple rule:

Multiply the digit in the tens place by the number that is one greater, and write the digits 25 after the product.

For example, to calculate $25^{2}$, the rule leads to the result 625 because $2 \cdot 3=6$.

Prove this rule!
