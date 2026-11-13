---
tag: YWTCNZM0HG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=207
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Ireland
---
Let $a$, $b$, $c$, $d$ be real numbers, with at least one of $a$ or $c$ non-zero, such that
$$
a^2 + ac + c^2 + 1 = b^2 + bd + d^2, \text{and} 2ab + ad + 2cd + bc = 0.
$$
Show that $ac < 0$ or $(3a^2 - b^2 + 1)(3c^2 - d^2 + 1) \le 0$.
