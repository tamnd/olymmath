---
tag: E6BX73AXM0
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5239
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a line, there are 16 points $A_{1}, \ldots A_{16}$, spaced 1 cm apart. Misha constructs circles according to the following rules:

a) The circles do not intersect or touch.

b) Inside each circle, there is at least one of the specified points $\mathrm{A}_{1}, \ldots \mathrm{A}_{16}$.

c) None of these points lie on the circle.

d) Different circles contain different sets of points. For example, if one circle contains points $A_{1}$ and $A_{2}$ inside and the rest outside, then it is not possible to construct another circle that contains only $A_{1}$ and $A_{2}$ inside.

What is the maximum number of circles Misha can construct according to these rules?
