---
tag: FYZQ99NN0K
kind: problem
type: answer
answer: P(x) = (x + 1)^{2016}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Third Round
---
A polynomial
$$
P(x) = x^{2016} + 2016x^{2015} + a_{2014}x^{2014} + a_{2013}x^{2013} + \dots + a_1x + 1
$$
can be expressed as $P(x) = (x - x_1)(x - x_2)\dots(x - x_{2016})$, where among the numbers $x_1, x_2, \dots, x_{2016}$ at least 2015 are negative (not necessarily distinct). Find all coefficients of $P(x)$.
