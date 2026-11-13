---
tag: WXA99D04DG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0001.parquet#row=36
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a > 2$ be an integer. Let
$$x = (a-1) \cdot a^{a-2} + (a-2) \cdot a^{a-3} + \dots + 2 \cdot a^1 + 1 \cdot a^0,$$
$$y = 1 \cdot a^{a-2} + 2 \cdot a^{a-3} + \dots + (a-2) \cdot a^1 + (a-1) \cdot a^0.$$

Prove that $x - 1$ is divisible by $y + 1$.
