---
tag: EBKGE7A5SK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33829
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X, X_{1}, X_{2}, \ldots$ be i.i.d. random variables. Define $S_{n}=X_{1}+\ldots+X_{n}, M_{n}=\max \left\{0, S_{1}, \ldots, S_{n}\right\}, M=\sup \left\{0, S_{1}, S_{2}, \ldots\right\}$

(a) Show that $M_{n} \stackrel{d}{=}\left(M_{n-1}+X\right)^{+}, n \geqslant 1$, and

$$
\mathrm{E} M_{n}=\sum_{k=1}^{n} \frac{\mathrm{E} S_{k}^{+}}{k}
$$

Remark. The given relation can be obtained by differentiating with respect to $t$ a more general identity of Spitzer:

$$
\sum_{n=0}^{\infty} s^{n} \mathrm{E} e^{i t M_{n}}=\exp \left\{\sum_{n=1}^{\infty} \frac{s^{n}}{n} \mathrm{E} e^{i t S_{n}^{+}}\right\}
$$

for any $0<s<1$.

(b) Show that if $S_{n} \rightarrow-\infty$ a.s., then $M \stackrel{d}{=}(M+X)^{+}$.

(c) Show that if $-\infty<\mathrm{E} X<0$ and $\mathrm{E} X^{2}<\infty$, then

$$
\mathrm{E} X=-\mathrm{E}(M+X)^{-} \text { and } \mathrm{E} M=\frac{\mathrm{E} X^{2}-\mathrm{E}\left[(M+X)^{-}\right]^{2}}{-2 \mathrm{E} X}
$$
