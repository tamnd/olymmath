---
tag: 8NQCF21AQ5
kind: problem
type: answer
answer: n-\frac{^{2}-+2}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=152356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On an infinite checkerboard, the union of any two distinct unit squares is called a (disconnected) domino. A domino is said to be of type $(a, b)$, with $a \leq b$ integers not both zero, if the centers of the two squares are separated by a distance of $a$ in one orthogonal direction and $b$ in the other. (For instance, an ordinary connected domino is of type ( 0,1 ), and a domino of type $(1,2)$ contains two squares separated by a knight's move.)
Each of the three pairs of squares above forms a domino of type $(1,2)$.

Two dominoes are said to be congruent if they are of the same type. A rectangle is said to be $(a, b)$-tileable if it can be partitioned into dominoes of type $(a, b)$.
1. [15] Let $0<m \leq n$ be integers. How many different (i.e., noncongruent) dominoes can be formed by choosing two squares of an $m \times n$ array?
