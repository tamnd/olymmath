---
tag: EE1F5HVPV6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=109
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
Let $Q_n(x) = 1 + x + \frac{x^2}{2} + \cdots + \frac{x^n}{n!}$ for $n \ge 0$ integer and $x$ real.
Prove that we have $\frac{Q_n(b) - Q_n(a)}{b-a} \ge Q_{n-1}\left(\frac{a+b}{2}\right)$ for any $n \ge 1$ and $b > a > 0$.
