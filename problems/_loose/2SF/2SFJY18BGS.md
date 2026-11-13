---
tag: 2SFJY18BGS
kind: problem
type: answer
answer: Equality occurs at a = b = c = 1/4, and the maximum value is 8/9.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Vietnam/train/0000.parquet#row=81
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a$, $b$, $c$ be positive numbers satisfying:
$$
\frac{1}{a} + \frac{1}{b} + \frac{1}{c} \le 16(a + b + c).
$$
Show that
$$
\frac{1}{(a + b + \sqrt{2(a + c)})^3} + \frac{1}{(b + c + \sqrt{2(b + a)})^3} + \frac{1}{(c + a + \sqrt{2(c + b)})^3} \le \frac{8}{9}.
$$
When does the equality occur?
