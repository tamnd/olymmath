---
tag: JMJVF4V9AH
kind: problem
type: answer
answer: Exactly one number equals negative one and all the others equal zero.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Third Round (Second Tour)
---
Numbers $x_1, x_2, \ldots, x_{2015}$ fulfill both equalities simultaneously:

$x_1^{2014} + x_2^{2014} + \ldots + x_{2015}^{2014} = 1$ and $x_1^{2015} + x_2^{2015} + \ldots + x_{2015}^{2015} = -1$.
