---
tag: SA4YY027FQ
kind: problem
type: answer
answer: Marin-100,-150,banana-170,peach-200,orange-280
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13987
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table lie an orange, a banana, a tangerine, a peach, and an apple. Their weights are 100 g, 150 g, 170 g, 200 g, 280 g, but it is unknown which fruit weighs how much.

It is known that:

- the peach is lighter than the orange
- the banana is heavier than the apple, but lighter than the peach
- the tangerine is lighter than the banana
- the apple and the banana together are heavier than the orange.

How much does each fruit weigh?
