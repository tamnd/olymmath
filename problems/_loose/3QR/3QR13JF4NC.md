---
tag: 3QR13JF4NC
kind: problem
type: answer
answer: \sqrt[2018]{2018}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=15644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $t=\log _{x^{2019}} 2018$, then the equation will take the form: $t+t^{2}+t^{3}+\ldots=2018$.

Simplify the left part of the last equation using the formula for the sum of an infinite decreasing geometric progression, we get: $\frac{t}{1-t}=2018$.

From which $t=\frac{2018}{2019}$.

We get, $\log _{x^{2019}} 2018=\frac{2018}{2019},\left(x^{2019}\right)^{\frac{2018}{2019}}=2018, x=\sqrt[2018]{2018}$.
