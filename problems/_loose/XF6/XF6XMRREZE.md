---
tag: XF6XMRREZE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94202
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that there does not exist a function $f: \mathbf{R}_{+} \rightarrow \mathbf{R}_{+}$, such that for any positive real numbers $x, y$, we have
$$
\begin{array}{l}
(x+y) f(2 y f(x)+f(y)) \\
=x^{3} f(y f(x)).
\end{array}
$$
(2015, Bulgarian National Team Selection Exam)
