---
tag: 4EGY0E7KRB
kind: problem
type: answer
answer: Equality holds exactly when a, b, c are in the ratio 1:2:3 (i.e., b = 2a and c = 3a with a > 0).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0000.parquet#row=9
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia 45th Mongolian Mathematical Olympiad
---
Let $a$, $b$, $c$ positive real numbers. Prove that
$$
\sqrt{\frac{3bc}{(a+b)(a+b+c)}} + \sqrt[4]{\frac{12a(a+b)}{(a+b+c)^2}} \le 2.
$$
Find the equality condition.
