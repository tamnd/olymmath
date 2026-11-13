---
tag: RS2PVYG3NR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way
    source: hf-mathnet
    label: Baltic Way Baltic Way
---
Let $a_0, a_1, \dots, a_N$ be real numbers where $a_0 = a_N = 0$. Prove the inequality
$$ a_1^2 + a_2^2 + \dots + a_{N-1}^2 \le C \left((a_1 - a_0)^2 + (a_2 - a_1)^2 + \dots + (a_N - a_{N-1})^2\right), $$
where $C = \frac{N^2}{4}$.
