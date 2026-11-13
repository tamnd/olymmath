---
tag: 8QBYWVPRPZ
kind: problem
type: answer
answer: 1.099999,0.900001,1.050000,0.950000,1.010000,0.990000
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's calculate the value of the square of the expression

$$
1+\frac{x}{2}-\frac{x^{2}}{8}+\frac{x^{3}}{16}-\frac{5 x^{4}}{128}
$$

to six decimal places for the cases $x= \pm 0.1, \pm 0.05, \pm 0.01$.
