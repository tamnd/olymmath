---
tag: SR3H6TSARA
kind: problem
type: answer
answer: (x-y)xy(x+y)(2x-y)(x-2y)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101092
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the polynomial $f(x, y)$ of the lowest degree (but no less than 1) in $x, y$ that satisfies the following conditions:
$$
\left\{\begin{array}{l}
f(x, y) + f(y, x) = 0, \\
f(x, x + y) + f(y, x + y) = 0.
\end{array}\right.
$$
(1994 Japan Olympiad Preliminary Problem)
