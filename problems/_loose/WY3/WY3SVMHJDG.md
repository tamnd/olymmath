---
tag: WY3SVMHJDG
kind: problem
type: answer
answer: (-\infty;-12)\cup(-2;-1]\cup[2;3)\cup[8;+\infty)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5267
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The inequality is equivalent to

$$
\begin{gathered}
\frac{\sqrt{x^{2}+14 x+40}-2 \sqrt{x^{2}-x-2}}{\left(\sqrt{x^{2}-x-2}-2\right)\left(\sqrt{x^{2}+14 x+40}-4\right)} \leqslant 0 \Leftrightarrow \\
\left\{\begin{array} { l }
{ \frac { x ^ { 2 } + 1 4 x + 4 0 - 4 ( x ^ { 2 } - x - 2 ) } { ( x ^ { 2 } - x - 6 ) ( x ^ { 2 } + 1 4 x + 2 4 ) } \leqslant 0 , } \\
{ x ^ { 2 } - x - 2 \geqslant 0 , } \\
{ x ^ { 2 } + 1 4 x + 4 0 \geqslant 0 }
\end{array} \Leftrightarrow \left\{\begin{array}{l}
\frac{(x-8)(x+2)}{(x-3)(x+2)^{2}(x+12)} \geqslant 0 \\
(x+1)(x-2) \geqslant 0 \\
(x+10)(x+4) \geqslant 0
\end{array}\right.\right.
\end{gathered}
$$
