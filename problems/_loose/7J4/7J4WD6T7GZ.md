---
tag: 7J4WD6T7GZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38905
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The functions $f(x)$ and $g(x)$ are differentiable on the interval $[a, b]$, and the derivative $g'(x)$ does not vanish at any interior point of this interval. Prove that there exists an interior point $x_0$ of the interval $[a, b]$ such that

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'\left(x_{0}\right)}{g'\left(x_{0}\right)} (\text{Cauchy})
$$
