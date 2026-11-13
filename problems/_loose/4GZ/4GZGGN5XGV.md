---
tag: 4GZGGN5XGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=41
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that, if $f: [0, \infty) \to \mathbb{R}$ is a convex function and $a, b, c$ are positive real numbers, then
$$
\begin{aligned}
& \int_{0}^{a} f(x) dx + \int_{0}^{b} f(x) dx + \int_{0}^{c} f(x) dx + \int_{0}^{a+b+c} f(x) dx \
\ge \\
& \int_{0}^{a+b} f(x) dx + \int_{0}^{a+c} f(x) dx + \int_{0}^{b+c} f(x) dx.
\end{aligned}
$$
Dan Marinescu and Leonard Giugiuc
