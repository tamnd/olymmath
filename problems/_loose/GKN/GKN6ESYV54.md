---
tag: GKN6ESYV54
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33876
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, \ldots, X_{n}, n \geqslant 2,$ be i.i.d. random variables with distribution function $F(x)$ (and density $f(x)$, if it exists)
and $M_{n}=\max \left\{X_{1}, \ldots, X_{n}\right\}, m_{n}=\min \left\{X_{1}, \ldots, X_{n}\right\}, R_{n}=M_{n}-m_{n}$. Show that

$$
\begin{aligned}
F_{m_{n}, M_{n}}(x, y) & =\mathrm{P}\left(m_{n} \leqslant x, M_{n} \leqslant y\right)= \begin{cases}F(y)^{n}-[F(y)-F(x)]^{n}, & y>x \\
F(y)^{n}, & y \leqslant x\end{cases} \\
f_{m_{n}, M_{n}}(x, y) & =n(n-1)[F(y)-F(x)]^{n-2} f(x) f(y) I(y \geqslant x), \\
F_{R_{n}}(x) & =n I(x \geqslant 0) \int_{\mathbb{R}}[F(y)-F(y-x)]^{n-1} f(y) d y, \\
f_{R_{n}}(x) & =n(n-1) I(x \geqslant 0) \int_{\mathbb{R}}[F(y)-F(y-x)]^{n-2} f(y-x) f(y) d y .
\end{aligned}
$$
