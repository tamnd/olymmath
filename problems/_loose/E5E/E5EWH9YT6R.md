---
tag: E5EWH9YT6R
kind: problem
type: answer
answer: sqrt(10)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=209
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $a$ and $b$ real numbers, define
$$
E(a,b) = \sqrt{\left(\frac{1}{2} - a\right)^2 + \left(\frac{1}{2} - b\right)^2} + \sqrt{\left(\frac{1}{2} + a\right)^2 + \left(\frac{1}{2} + b\right)^2}.
$$

a) Prove that $E(a, b) \ge \sqrt{2}$, for every real numbers $a, b$, and equality takes place if and only if $a = b \in [-\frac{1}{2}, \frac{1}{2}]$.

b) Find $\min \{E(a, a+2) \mid a \in \mathbb{R}\}$.
