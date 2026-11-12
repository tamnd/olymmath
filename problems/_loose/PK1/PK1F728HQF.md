---
tag: PK1F728HQF
kind: problem
type: answer
answer: +n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=25349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Two players are playing a game. The first player writes down two rows of 10 numbers each, such that the following rule is satisfied: if the number $b$ is written under the number $a$, and the number $d$ is written under the number $c$, then $a+d=b+c$. The second player, knowing this rule, wants to determine all the written numbers. He is allowed to ask the first player questions of the type "What number is in the first row in the third position?" or "What number is in the second row in the ninth position?" and so on. What is the minimum number of such questions the second player needs to ask to find out all the numbers?

b) In an $m \times n$ table, numbers are written such that for any two rows and any two columns, the sum of the numbers in the two opposite corners of the formed rectangle is equal to the sum of the numbers in the other two corners. Some of the numbers have been erased, but the remaining numbers can be used to restore the erased ones. Prove that at least $m+n-1$ numbers remain.
