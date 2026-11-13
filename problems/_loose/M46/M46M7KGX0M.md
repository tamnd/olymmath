---
tag: M46M7KGX0M
kind: problem
type: answer
answer: 1344 = 2 \times \frac{2017 - 1}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217710
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two-way flights between some of the $2017$ cities in a country, such that given two cities, it is possible to reach one from the other. No matter how the flights are appointed, one can define $k$ cities as "special city", so that there is a direct flight from each city to at least one "special city". Find the minimum value of $k$.
