---
tag: JMYR09TYNB
kind: problem
type: answer
answer: x = y = z = √2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=33
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine Ukrainian Mathematical Olympiad
---
Find all triplets of real positive numbers $x$, $y$ and $z$ such that
$$
\begin{cases}
\sqrt{2x - \frac{2}{y}} + \sqrt{2y - \frac{2}{z}} + \sqrt{2z - \frac{2}{x}} = \sqrt{3(x + y + z)}, \\
x^2 + y^2 + z^2 = 6.
\end{cases}
$$
