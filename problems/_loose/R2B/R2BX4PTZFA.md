---
tag: R2BX4PTZFA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=184609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two persons, $A$ and $B$, play a dice game according to the following rules:

First, an integer $Z$ is agreed upon. Then each player rolls 4 dice, each of which, as usual, bears the numbers 1 to 6. If a player manages to form the agreed number $Z$ using the numbers rolled by him (where the number on each die must be used exactly once), he earns a point.

It is allowed to combine the four numbers independently of their order using the basic arithmetic operations, to use the power notation, to set parentheses in any way, and also to form multi-digit numbers using the numbers as digits.

In one execution of this game, the agreed number $Z=12$ was given, and the following results were obtained:

The numbers rolled by $A$ were four consecutive natural numbers. The numbers rolled by $B$ were all the same natural number.

Show that for all possible rolls that meet these conditions, both player $A$ and player $B$ could have earned a point!
