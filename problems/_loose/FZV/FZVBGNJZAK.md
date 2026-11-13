---
tag: FZVBGNJZAK
kind: problem
type: answer
answer: \frac{3\sqrt{3}}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let the function $y=f(x)$ satisfy: for all $x \in \mathbf{R}, y=f(x) \geqslant 0$, and $f(x+1)=\sqrt{9-f(x)^{2}}$. When $x \in[0,1)$,
$$
f(x)=\left\{\begin{array}{ll}
2^{x}, & 0 \leqslant x<\frac{1}{2}, \\
\lg (x+31), & \frac{1}{2} \leqslant x<1 .
\end{array}\right.
$$

Then $f(\sqrt{1000})=$ $ $ .
