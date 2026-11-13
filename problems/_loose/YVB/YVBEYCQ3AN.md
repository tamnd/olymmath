---
tag: YVBEYCQ3AN
kind: problem
type: answer
answer: (n-1)^2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=212
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $n \ge 2$. Determine the least possible value the sum
$$
\left\lfloor \frac{x_2 + x_3 + \cdots + x_n}{x_1} \right\rfloor + \left\lfloor \frac{x_1 + x_2 + \cdots + x_n}{x_2} \right\rfloor + \cdots + \left\lfloor \frac{x_1 + x_2 + \cdots + x_{n-1}}{x_n} \right\rfloor
$$
may achieve, as $x_1, x_2, \dots, x_n$ run through all positive real numbers.
