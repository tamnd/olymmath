---
tag: 3TTFVE9YPT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73803
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have 25 coins that appear identical, but we know that exactly one of them is counterfeit and has a different weight from the others. We do not know which coin is the counterfeit. All the other 24 coins have the same weight.

We want to determine, using a balance scale, whether the counterfeit coin is lighter or heavier than the others.

How can we achieve this goal by performing two weighings on a balance scale?

- We do not want to find the counterfeit coin. We want to know if it is lighter or heavier than the others.
- With this type of balance, we can compare the weights placed on both pans, meaning the balance can either balance or tip to the heavier side.
