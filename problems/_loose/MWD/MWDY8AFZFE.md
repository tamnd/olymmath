---
tag: MWDY8AFZFE
kind: problem
type: answer
answer: (4,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186192
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In two urns $A$ and $B$, there are exactly $m$ red and exactly $n$ blue balls in total. The total number of balls is greater than 2; at least one of the balls is red.

At the beginning, $A$ contains all the red and $B$ all the blue balls.

By alternately taking one randomly selected ball from $A$ and $B$ and placing it in the other urn, the balls are to be mixed.

The process begins with the removal from urn $A$.

Determine all pairs $(m ; n)$ of the numbers $m$ and $n$ for which the fourth ball moved has a probability of $\frac{1}{2} 2$ of being red.
