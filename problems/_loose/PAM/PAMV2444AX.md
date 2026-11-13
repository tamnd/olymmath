---
tag: PAMV2444AX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122521
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
When $x>0$, prove:
$$
\begin{array}{l}
\sin x \leqslant x \\
\sin x \geqslant x-\frac{x^{3}}{3!} \\
\sin x \leqslant x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!} \\
\sin x \geqslant x-\frac{x^{3}}{3!}+\frac{x^{5}}{5!}-\frac{x^{7}}{7!}, \cdots
\end{array}
$$
