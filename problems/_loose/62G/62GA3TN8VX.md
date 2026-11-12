---
tag: 62GA3TN8VX
kind: problem
type: answer
answer: "504"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=7897
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(40 points) In a store where all items cost a whole number of rubles, two special offers are in effect:
1) A customer who buys at least three items can choose one item as a gift (free of charge), the cost of which does not exceed the minimum cost of the paid items;
2) A customer who buys exactly one item for no less than $N$ rubles receives a $20\%$ discount on the next purchase (of any number of items).

A customer, visiting the store for the first time, wants to purchase exactly four items with a total cost of 1000 rubles, the cheapest of which costs no less than 99 rubles. Determine the largest $N$, for which the second offer is more beneficial for him.
