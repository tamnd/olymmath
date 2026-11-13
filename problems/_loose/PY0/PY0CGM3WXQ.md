---
tag: PY0CGM3WXQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=47
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 46th Mongolian Mathematical Olympiad
---
Given are sequences $\{x_n\}$ and $\{y_n\}$ by the following recurrent relations: $x_1 = 1$, $y_1 = 39$ and
$$
x_{n+1} = 23x_n + y_n + 2, y_{n+1} = 551x_n + 24y_n + 64.
$$
Prove that $x_n$ is a perfect square for all positive integer $n$.
