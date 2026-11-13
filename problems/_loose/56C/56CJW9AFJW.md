---
tag: 56CJW9AFJW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=211
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
Prove that if $0 < x_1 \le x_2 \le \dots \le x_n$ and $k \in \mathbb{N}$ then the inequality
$$
\sqrt[k]{x_1^k + x_n^k - \frac{x_1^k + \dots + x_n^k}{n}} \geq x_1 + x_n - \frac{x_1 + \dots + x_n}{n} \text{ holds.}
$$
