---
tag: YM1R5R5EX0
kind: problem
type: answer
answer: All continuous solutions are f(x) = a x^2 for any real constant a.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Thailand/train/0000.parquet#row=5
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: th-tmo
    source: hf-mathnet
    label: Thailand Thai Mathematical Olympiad
---
Let $\alpha = \frac{1 + \sqrt{5}}{2}$. Find all continuous functions $f: \mathbb{R} \to \mathbb{R}$ such that, for all $x, y, z \in \mathbb{R}$,
$$
\begin{aligned}
& f(\alpha x + y) + f(\alpha y + z) + f(\alpha z + x) \\
&= \alpha f(x + y + z) + 2f(x) + 2f(y) + 2f(z).
\end{aligned}
$$
