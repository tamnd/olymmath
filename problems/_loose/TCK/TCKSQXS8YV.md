---
tag: TCKSQXS8YV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183427
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Anja and Bernd are playing a game according to the following rules: 8 cards are used, each with exactly one of the digits 1, 2, 3, 4, 5, 6, 7, 8, and a game board with 7 fields:

First, a natural number $n$ is agreed upon. Then Anja and Bernd alternately (starting with Anja) place one of the unused cards on any free field of the figure.

At the end, a seven-digit number is formed. If it is divisible by $n$, Anja wins; otherwise, Bernd wins.

a) Find two of the numbers $2,3,4,5,6,7,8$ for which the following holds:

If this number is agreed upon as $n$, Anja can force a win, regardless of how Bernd plays! Explain how Anja can do this!

b) Prove the following statement! If $n=9$ is agreed upon, Bernd always wins, regardless of which cards both players place.

c) Investigate whether, in the case where $n=21$ is agreed upon, one of the two players can force a win, regardless of how the other plays!
