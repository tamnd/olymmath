---
tag: D8HZ4MMH8P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $P_{\xi}(x)=\mathrm{P}\{\xi=x\}$ and $F_{\xi}(x)=\mathrm{P}\{\xi \leqslant x\}$. Show that for $a>0$ and $-\infty<b<\infty$ the following equalities hold:

$$
\begin{aligned}
& P_{a \xi+b}(x)=P_{\xi}\left(\frac{x-b}{a}\right), \\
& F_{a \xi+b}(x)=F_{\xi}\left(\frac{x-b}{a}\right) .
\end{aligned}
$$

Show also that for $y \geqslant 0$ the following equality holds:

$$
F_{\xi^{2}}(y)=F_{\xi}(+\sqrt{y})-F_{\xi}(-\sqrt{y})+P_{\xi}(-\sqrt{y})
$$

and for $\xi^{+}=\max (\xi, 0)$ the following equality holds:

$$
F_{\xi^{+}}(x)= \begin{cases}0, & x<0 \\ F_{\xi}(x), & x \geqslant 0\end{cases}
$$
