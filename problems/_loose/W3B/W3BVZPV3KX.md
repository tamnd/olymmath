---
tag: W3BVZPV3KX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33978
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(X_{n}\right)_{n \geqslant 1}$ be a sequence of random variables, and $S_{n}=X_{1}+\ldots+X_{n}$.

(a) Assuming that $p \geqslant 1$, establish that

$$
\begin{aligned}
& X_{n} \rightarrow 0 \text { a.s. } \Rightarrow \frac{S_{n}}{n} \rightarrow 0 \text { a.s. } \text { as } n \rightarrow \infty \\
& X_{n} \xrightarrow{L^{p}} 0 \Rightarrow \frac{S_{n}}{n} \xrightarrow{L^{p}} 0 \text { as } n \rightarrow \infty .
\end{aligned}
$$

(b) Show that, in general,

$$
X_{n} \xrightarrow{p} 0 \nRightarrow \frac{S_{n}}{n} \xrightarrow{p} 0 .
$$

Prove that a sufficient condition for the convergence $S_{n} / n \xrightarrow{p} 0$ is the relation

$$
\max _{m<k \leqslant n}\left|X_{k}\right| \xrightarrow{p} 0, m, n \rightarrow \infty, m<n
$$
