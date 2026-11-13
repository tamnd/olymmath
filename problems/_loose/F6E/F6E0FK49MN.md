---
tag: F6E0FK49MN
kind: problem
type: answer
answer: "26880"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Lucio has a box with many 14-faced dice of the same shape and size but with different numbering. The shape of the dice is a truncated cube, that is, a cube whose vertices are cut off to form a polyhedron with 14 faces, 6 regular octagons, and 8 equilateral triangles. Each die has all the numbers from 1 to 14 on different faces, but in such a way that the sum of the numbers on opposite faces of the same die is always the same. However, taking two different dice, there is no rotation that can transform the first into the second. What is the maximum number of dice in Lucio's box?

We say that a pair $(a, b)$ of positive integers is beautiful if $a$ divides $b$ and $a+1$ divides $b+1$.

(a) Prove that, for a fixed positive integer $a$, there are infinitely many positive integers $b$ such that the pair $(a, b)$ is beautiful.

(b) For a fixed positive integer $a$, determine the minimum positive integer $b > a$ such that $(a, b)$ is beautiful.

(c) Now take $a=18$, determine the minimum positive integer $b > a$ such that $(a, b)$ is beautiful and also $a+2$ divides $b+2$.
