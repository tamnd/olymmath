---
tag: 9VM9XX2CW0
kind: problem
type: answer
answer: \frac{x^{2^{2019}}}{x^{2^{2019}}-(x-1)^{2^{2019}}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95244
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\frac{x^{2}}{2 x-1}$, and denote
$$
f_{1}(x)=f(x), f_{n+1}(x)=f\left(f_{n}(x)\right) \text {. }
$$

Then $f_{2019}(x)=$ $ $ .
