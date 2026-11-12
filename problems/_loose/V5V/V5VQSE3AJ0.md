---
tag: V5VQSE3AJ0
kind: problem
type: answer
answer: "2540"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13010
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the mass of the new alloy be 1, and the relative masses of the 1st, 2nd, and 3rd alloys in it be $ x, y, z $ respectively; the content of chromium in the new alloy is $ k $. We obtain the system of equations:

$$
\left\{\begin{array}{c}
x+y+z=1 \\
0.9 x+0.3 z=0.45 \\
0.4 x+0.1 y+0.5 z=k
\end{array}\right.
$$

From the 2nd equation: $ y=\frac{1}{2}-\frac{1}{3} z $. Substituting into the 1st equation, we get: $ x=\frac{1}{2}-\frac{2}{3} z $.

Substituting into the 3rd equation: $ k=0.25+0.2 z $.

Since $ z \geq 0 $, then $ k_{\min }=0.25=25 \% $.

$ x=\frac{1}{2}-\frac{2}{3} z \Leftrightarrow z=\frac{3}{4}-\frac{3}{2} x $

$ k=0.25+0.2 z=0.4-0.3 x $.

Since $ x \geq 0 $, then $ k_{\max }=0.4=40 \% $.
