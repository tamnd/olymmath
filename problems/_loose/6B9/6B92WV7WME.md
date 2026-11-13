---
tag: 6B92WV7WME
kind: problem
type: answer
answer: m = n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\in\mathbb{Z}^+$. Arrange $n$ students $A_1,A_2,...,A_n$ on a circle such that the distances between them are.equal. They each receives a number of candies such that the total amount of candies is $m\geq n$. A configuration is called *balance* if for an arbitrary student $A_i$, there will always be a regular polygon taking $A_i$ as one of its vertices, and every student standing at the vertices of this polygon has an equal number of candies.

a) Given $n$, find the least $m$ such that we can create a balance configuration.

b) In a *move*, a student can give a candy to the student standing next to him (no matter left or right) on one condition that the receiver has less candies than the giver. Prove that if $n$ is the product of at most $2$ prime numbers and $m$ satisfies the condition in a), then no matter how we distribute the candies at the beginning, one can always create a balance configuration after a finite number of moves.
