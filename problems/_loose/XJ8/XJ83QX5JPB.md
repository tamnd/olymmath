---
tag: XJ83QX5JPB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104875
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given that $n$ is a positive integer. A and B have a circular necklace with $3 n$ blue gems and $3 n$ green gems, and any three adjacent gems have different colors. They play a cooperative game. The two players take turns removing three adjacent gems, and must satisfy the following conditions:
(1) On each of A's turns, A must remove three adjacent gems in the order green, blue, green;
(2) On each of B's turns, B must remove three adjacent gems in the order blue, green, blue.

If all the gems are removed after $2 n$ operations, they win. Prove: If A can win when A goes first, then B can also win when B goes first.
