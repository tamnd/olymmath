---
tag: F2BT9JM2MR
kind: problem
type: answer
answer: The minimum value is 0, achieved exactly when all variables are equal to 1.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=457
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-mathnet
    label: Romania SELECTION TESTS FOR THE 2019 BMO AND IMO
---
Given an integer $n \ge 3$, determine the least value the sum $\sum_{i=1}^{n} (1/x_i - x_i)$ may achieve, as the $x_i$ run through the positive real numbers subject to $\sum_{i=1}^{n} \frac{1}{x_i + n - 1} = 1$. Also, determine the $x_i$ at which this minimum is achieved.
