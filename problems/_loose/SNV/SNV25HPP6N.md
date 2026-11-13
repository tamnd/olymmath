---
tag: SNV25HPP6N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=130
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo
    source: hf-mathnet
    label: Vietnam Vietnamese Mathematical Competitions
---
Let be given an integer $n \ge 4$ and $x_1, x_2, x_3, \dots, x_n$ be nonnegative real numbers.
a) Prove that we have inequality
$$
\left(\sum_{i=1}^{n} x_i\right)^2 \ge \min\left\{\frac{n}{3}, \frac{8}{3}\right\} \sum_{i=1}^{n} x_i (x_{i+1} + x_{i+2} + x_{i+3})
$$
where $x_{n+1} = x_1$, $x_{n+2} = x_2$, $x_{n+3} = x_3$.
b) When does the equality hold?
