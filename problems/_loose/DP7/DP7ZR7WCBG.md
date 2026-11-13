---
tag: DP7ZR7WCBG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=238
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 62nd ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $f : \mathbb{R} \to \mathbb{R}$ be a non-decreasing function and $F : \mathbb{R} \to \mathbb{R}$ a function having right and left finite derivatives at any point in $\mathbb{R}$ and $F(0) = 0$. Suppose that $\lim_{x \uparrow x_0} f(x) \le F'_s(x_0)$ and $\lim_{x \downarrow x_0} f(x) \ge F'_d(x_0)$, for any $x_0 \in \mathbb{R}$. Prove that $F(x) = \int_0^x f(t) dt$, $x \in \mathbb{R}$.
