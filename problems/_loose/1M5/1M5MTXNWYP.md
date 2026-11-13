---
tag: 1M5MTXNWYP
kind: problem
type: answer
answer: f(n) \leq 3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243366
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer greater than $1$. A certain school has $1+2+\dots+n$ students and $n$ classrooms, with capacities for $1, 2, \dots, n$ people, respectively. The kids play a game in $k$ rounds as follows: in each round, when the bell rings, the students distribute themselves among the classrooms in such a way that they don't exceed the room capacities, and if two students shared a classroom in a previous round, they cannot do it anymore in the current round. For each $n$, determine the greatest possible value of $k$.

*Proposed by Victor Domínguez*
