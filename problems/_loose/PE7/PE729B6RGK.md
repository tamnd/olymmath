---
tag: PE729B6RGK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262818
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a unique ordered triple of real numbers $(a, b, c)$ that makes the piecewise function
\begin{align*}
f(x) = \begin{cases}
(x - a)^2 + b & \text{if } x \geq c \\
x^3 - x & \text{if } x < c
\end{cases}
\end{align*}
twice continuously differentiable for all real $x.$ The value of $a + b + c$ can be expressed as a common fraction $p/q.$ Compute $p + q.$
