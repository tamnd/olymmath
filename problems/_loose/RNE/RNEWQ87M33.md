---
tag: RNEWQ87M33
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=383
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland IRL_ABooklet
---
Let $a$, $b$, $c$ be positive integers. Show that
$$
\left( 1 + \frac{a-c}{b} \sum_{i=1}^{b} \frac{1}{c+i} \right)^{-b} \le \frac{a!\,(b+c)!}{(a+b)! c!} \le \left( 1 + \frac{c-a}{b} \sum_{i=1}^{b} \frac{1}{a+i} \right)^{b}.
$$
