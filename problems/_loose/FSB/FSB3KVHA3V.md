---
tag: FSB3KVHA3V
kind: problem
type: answer
answer: (-1,-\frac{\sqrt{2}}{2}]\cup{0}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=124773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a function $f(x)$ defined on $\mathbb{R}$, for any $x \in \mathbb{R}$, we have
$$
\begin{array}{l}
f(-x)+f(x)=0 \\
f(x+1)+f(x)=0
\end{array}
$$

and when $x \in(0,1)$, $f(x)=\sqrt{x}$. Then, when $x \in\left[-3,-\frac{5}{2}\right]$, the range of $f(x)$ is
