---
tag: 56Y7YGRWQ3
kind: problem
type: answer
answer: "42"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186034
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \neq 0$ be a natural number. On a circle, there are $2 n$ pairwise distinct points $P_{1}, P_{2}, \ldots, P_{2 n}$ given.

We are looking for the number $A_{n}$ of all different ways to draw a set of $n$ chords such that the following conditions are met:

Each chord connects one of the points $P_{1}, P_{2}, \ldots, P_{2 n}$ with another of these points, and no two of these chords have a common point inside or on the boundary of the circle.

Two possibilities are considered different if and only if there is at least one pair of points $P_{i}, P_{j}$ that is connected by a chord in one of the two possibilities but not in the other.

a) Determine the number $A_{3}$ by providing several different possibilities for three chords for six points $P_{1}, P_{2}, \ldots, P_{6}$ and proving that all different possibilities of the required type are covered!

b) Determine a formula that can be used to calculate the number $A_{n}$ for any $n \geq 2$ from the numbers $A_{1}, \ldots, A_{n-1}$!

c) Determine the number $A_{5}$!
