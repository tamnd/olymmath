---
tag: DNF4WDAFPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=37
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: [0, 1] \to \mathbb{R}$ be a continuous function such that $f((1-t)x + ty) \le \max\{f(x), f(y)\}$, for every $t, x, y \in [0, 1]$, and let $m = \inf_{0 \le x \le 1} f(x)$. Show that:

a) the set $\{x \mid 0 \le x \le 1, f(x) = m\}$ is a closed interval;

b) if $f(0) = 0$, $\int_{0}^{1} f(x) dx = 0$ and $g: [0, 1] \to \mathbb{R}$ is a non-decreasing function, then
$$
\int_{0}^{1} f(x)g(x) dx \ge 0.
$$
