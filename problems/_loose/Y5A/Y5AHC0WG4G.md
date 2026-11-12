---
tag: Y5AHC0WG4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34017
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X_{1}, \ldots, X_{n}$ be exchangeable random variables, i.e., the joint distribution of any group of random variables consisting of $j$ elements with different indices $X_{i_{1}}, \ldots, X_{i}$ depends only on $j$ and not on the specific choice of values $i_{1}, \ldots, i_{j}$. Show that

$$
\mathrm{D} X_{1} \geqslant \begin{cases}(n-1)\left|\operatorname{cov}\left(X_{1}, X_{2}\right)\right|, & \operatorname{cov}\left(X_{1}, X_{2}\right)<0 \\ \operatorname{cov}\left(X_{1}, X_{2}\right), & \operatorname{cov}\left(X_{1}, X_{2}\right) \geqslant 0\end{cases}
$$

For fixed $\rho$ and $\sigma^{2}$ satisfying the inequalities $\rho<0$, $\sigma^{2}+(n-1) \rho \geqslant 0$, construct such Gaussian exchangeable variables $X_{1}, \ldots, X_{n}$ that

$$
\mathrm{E} X_{1}=0, \mathrm{D} X_{1}=\sigma^{2}, \operatorname{cov}\left(X_{1}, X_{2}\right)=\rho
$$

Construct similar examples assuming that $\rho \geqslant 0, \sigma^{2} \geqslant \rho$.
