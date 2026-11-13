---
tag: D1DZKTHZFB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=361
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f: [a, b] \to \mathbb{R}$ is continuous and $f(y) \le \max\{f(x), f(z)\}$ for every $x, y, z \in [a, b]$ so that $x < y < z$. Denote $m = \min_{x \in [a, b]} f(x)$ and define the set $A = \{x \in [a, b] \mid f(x) = m\}$.

a) Prove that $A$ is a closed interval, possibly degenerated.

b) Prove that, if $a, b \notin A$, then there exists $c \in (a, b)$ such that on one of the intervals $[a, c]$ and $[c, b]$ the function is increasing and on the other it is decreasing.
