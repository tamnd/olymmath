---
tag: AZJBMEXV64
kind: problem
type: answer
answer: \frac{3}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A game is composed of the following rules:

i) In each round, a common unbiased die is rolled.

ii) If the number 3 comes up, then player $A$ wins.

iii) If one of the numbers in the set $\{4,5,6\}$ comes up, then player $B$ wins.

iv) If one of the numbers in the set $\{1,2\}$ comes up, then the die is rolled again until it results in 3 or 4 or 5 or 6.

What is the probability that player $B$ wins?
