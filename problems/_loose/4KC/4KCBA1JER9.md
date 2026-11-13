---
tag: 4KCBA1JER9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=456
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $I \subset \mathbb{R}$ be an interval and $f : I \to \mathbb{R}$ be a continuous function. Prove that the following properties are equivalent:

i) $f(x) - f(y) < |x - y|$, for every $x, y \in I$;

ii) $\int_x^y f(t)dt - f(x)(y-x) \le \frac{1}{2}(x-y)^2$, for every $x, y \in I$.
