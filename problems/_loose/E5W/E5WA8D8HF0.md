---
tag: E5WA8D8HF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33572
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Based on the ideas and methods presented in V1.I.10, show that for a symmetric ($p=q=1/2$) Bernoulli random walk $\left\{S_{k}, k \leqslant n\right\}, S_{0}=0, S_{k}=\xi_{1}+\ldots+\xi_{k}$, the following formulas hold (where $N$ is a natural number):

(a) $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k} \geqslant N, S_{n}N\right\}$,

(b) $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k} \geqslant N\right\}=2 \mathrm{P}\left\{S_{n} \geqslant N\right\}-\mathrm{P}\left\{S_{n}=N\right\}$,

(c) $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k}=N\right\}=\mathrm{P}\left\{S_{n}=N\right\}+\mathrm{P}\left\{S_{n}=N+1\right\}=2^{-n} C_{n}^{\left[\frac{n+N+1}{2}\right]}$,

(d) $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k} \leqslant 0\right\}=\mathrm{P}\left\{S_{n}=0\right\}+\mathrm{P}\left\{S_{n}=1\right\}=2^{-n} C_{n}^{[n / 2]}$,

(e) $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n-1} S_{k} \leqslant 0, S_{n}>0\right\}=\mathrm{P}\left\{S_{1} \neq 0, \ldots, S_{n} \neq 0, S_{n+1}=0\right\}$,

(f) $\mathrm{P}\left\{S_{1}>0, \ldots, S_{2 n-1}>0, S_{2 n}=0\right\}=\frac{1}{n} 2^{-2 n} C_{2 n-2}^{n-1}$,

(g) $\mathrm{P}\left\{S_{1} \geqslant 0, \ldots, S_{2 n-1} \geqslant 0, S_{2 n}=0\right\}=\frac{1}{n+1} 2^{-2 n} C_{2 n}^{n}$.

Also show that the formulas

$$
\mathrm{P}\left\{S_{2 n}=2 k\right\}=2^{-2 n} C_{2 n}^{n-k}, k=0, \pm 1, \ldots, \pm n
$$

and

$$
\mathrm{P}\left\{S_{2 n+1}=2 k+1\right\}=2^{-2 n-1} C_{2 n+1}^{n-k}, k=-(n+1), 0, \pm 1, \ldots, \pm n
$$

can be written in a unified form as follows:

$$
\mathrm{P}\left\{S_{n}=k\right\}= \begin{cases}2^{-n} C_{n}^{(n-k) / 2}, & \text { if } k \equiv n(\bmod 2) \\ 0 & \text { in other cases }\end{cases}
$$

where $k=0, \pm 1, \ldots, \pm n$.

In addition to the above formula for $\mathrm{P}\left\{\max _{1 \leqslant k \leqslant n} S_{k}=N\right\}$ for natural $N$, show that

$$
\mathrm{P}\left\{\max _{0 \leqslant k \leqslant n} S_{k}=r\right\}=C_{n}^{[(n-r) / 2]} \cdot 2^{-n}
$$

for $r=0,1, \ldots, n$.
