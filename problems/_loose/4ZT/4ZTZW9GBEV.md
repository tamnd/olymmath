---
tag: 4ZTZW9GBEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106079
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given real numbers $a, b, c$ satisfy $b^{2}-a c<0$, and the equation
$$
a(\lg x)^{2}+2 b(\lg x \cdot \lg y)+c(\lg y)^{2}=1
$$

represents a curve passing through the point $\left(10, \frac{1}{10}\right)$. Prove: For any point $P(x, y)$ on this curve, the inequality
$$
-\frac{1}{\sqrt{a c-b^{2}}} \leqslant \lg (x y) \leqslant \frac{1}{\sqrt{a c-b^{2}}}
$$

holds.
