---
tag: VKAY826BX0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=134
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Consider a function $f : \mathbb{R} \to [0, \infty)$. Prove that $f$ satisfies the inequality $f(x+y) \ge (1+y)f(x)$ for any $x \in \mathbb{R}$ and any $y \ge 0$, if and only if the function $g : \mathbb{R} \to [0, \infty)$ defined by $g(x) = e^{-x}f(x)$, for $x \in \mathbb{R}$, is non-decreasing.
