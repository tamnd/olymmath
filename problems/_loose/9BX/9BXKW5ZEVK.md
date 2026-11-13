---
tag: 9BXKW5ZEVK
kind: problem
type: answer
answer: 7:3219:32
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183604
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a square $A B C D$ with side length $a$. On $B C$ lies a point $P_{1}$ such that $B P_{1}=P_{1} C$ holds, on $C D$ lies a point $P_{2}$ with $P_{2} D=3 C P_{2}$, and on $D A$ lies a point $P_{3}$ with $P_{3} A=3 D P_{3}$.

A point $P$ moves along the sides of the square from $P_{1}$ over $B$ and $A$ to $P_{3}$.

Let $A_{Q}$ be the area of the square $A B C D$ and $A_{V}$ be the area of the polygon $P P_{1} P_{2} P_{3}$.

Determine all positions of $P$ for which the ratio $A_{Q}: A_{V}$

a) is the largest,

b) is the smallest!

Calculate the ratio for each of these cases!

It is also allowed that $P$ coincides with $P_{1}$ or $P_{3}$ if one of the desired ratios occurs in these cases.
