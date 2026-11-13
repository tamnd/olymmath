---
tag: ES98X0KHPH
kind: problem
type: answer
answer: 2^{2008} + 2007
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0000.parquet#row=227
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Suppose that $f(x)$ is defined on $\mathbb{R}$, satisfying $f(0) = 2008$, and for any $x \in \mathbb{R}$
$$
\begin{aligned}
f(x+2) - f(x) &\le 3 \times 2^x, \\
f(x+6) - f(x) &\ge 63 \times 2^x.
\end{aligned}
$$

Then $f(2008) = \underline{\hspace{2cm}}$.
