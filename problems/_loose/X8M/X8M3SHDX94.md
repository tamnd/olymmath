---
tag: X8M3SHDX94
kind: problem
type: answer
answer: \lfloor \frac{n}{2} \rfloor \text{ and } \lceil \frac{n}{2} \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a fixed positive integer. Oriol has $n$ cards, each of them with a $0$ written on one side and $1$ on the other. We place these cards in line, some face up and some face down (possibly all on the same side). We begin the following process consisting of $n$ steps:

1) At the first step, Oriol flips the first card
2) At the second step, Oriol flips the first card and second card
.
.
.
n) At the last step Oriol flips all the cards

Let $s_0, s_1, s_2, \dots, s_n$ be the sum of the numbers seen in the cards at the beggining, after the first step, after the second step, $\dots$ after the last step, respectively.

a) Find the greatest integer $k$ such that, no matter the initial card configuration, there exists at least $k$ distinct numbers between $s_0, s_1, \dots, s_n$.
b) Find all positive integers $m$ such that, for each initial card configuration, there exists an index $r$ such that $s_r = m$.

*Proposed by Dorlir Ahmeti*
