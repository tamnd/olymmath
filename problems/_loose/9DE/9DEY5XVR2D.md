---
tag: 9DEY5XVR2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34061
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ and $Y$ be independent random variables with characteristic functions $\varphi=\varphi(t)$ and $\psi=\psi(t)$ and distribution functions $F=F(x)$ and $G=G(x)$. For functions $f=f(t)$ and $g=g(t)$ with values in $\mathbb{C}$, denote by $M(f, g)$ the limit (as $T \rightarrow \infty$) of the integrals

$$
\frac{1}{2 T} \int_{-T}^{T} f(t) \overline{g(t)} d t
$$

when it exists. Show that

$$
\begin{gathered}
M\left(\varphi, e^{i t x}\right)=\lim _{T} \frac{1}{2 T} \int_{-T}^{T} e^{-i t x} \varphi(t) d t=F(x)-F(x-), x \in \mathbb{R} \\
M(\varphi, \psi)=\sum_{-\infty<x<\infty}[F(x)-F(x-)][G(x)-G(x-)]
\end{gathered}
$$

In particular,

$$
M(\varphi, \varphi)=\sum_{-\infty<x<\infty}[F(x)-F(x-)]^{2}
$$

and the distribution function $F=F(x)$ is continuous if and only if $M(\varphi, \varphi)=0$.
