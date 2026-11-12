---
tag: R7T56MBCRV
kind: problem
type: answer
answer: '[-\frac{1}{2};\pi/6)\cup(\frac{5\pi}{6};\frac{8}{3}]'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Setting $t=\sin x, -1 \leqslant t \leqslant 1$, we get

$$
\sqrt{t+\frac{1}{2}}>2 t \Longleftrightarrow\left[\begin{array}{l}
\left\{\begin{array}{l}
t<0 \\
t+\frac{1}{2} \geqslant 0 \\
t \geqslant 0
\end{array}\right. \\
t+\frac{1}{2} \geqslant 4 t^{2}
\end{array} \Longleftrightarrow-\frac{1}{2} \leqslant t<\frac{1}{2}\right.
$$

Further comparison of numbers $-\frac{\pi}{6}<-\frac{1}{2}, \frac{5 \pi}{6}<\frac{8}{3}$.
