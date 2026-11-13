---
tag: CE0PFXF7NS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=126
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
Suppose $a$, $b$, and $c$ are positive real numbers. Prove that,
$$
24abc \leq |a^3 + b^3 + c^3 - (a+b+c)^3| \leq \frac{8}{9}(a+b+c)^3,
$$
and that for both inequalities, equality occurs if and only if $a = b = c$.
