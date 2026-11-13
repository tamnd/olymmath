---
tag: XVYJ6ZEXV0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A door is to be equipped with a sufficient number of locks.

For each lock, there should be a type of matching keys available in sufficient quantity, with each key fitting exactly one lock.

Eleven people are to receive such keys, but not every person for every lock.

A suggestion is rather that the following should be achieved:

Whenever at least six of the eleven people are present, their keys should include a matching key for each lock; whenever fewer than six people are present, they should lack a matching key for at least one lock.

Determine the smallest number of locks and a key distribution (to the eleven people) that would make this suggestion feasible!
