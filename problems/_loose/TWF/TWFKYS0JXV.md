---
tag: TWFKYS0JXV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(See [66].) Let $X_{\lambda}$ be a Poisson random variable with parameter $\lambda>0$.

(a) Prove the inequalities

$$
\begin{array}{ll}
\mathrm{P}\left(X_{\lambda} \leqslant n\right) \leqslant \frac{\lambda}{\lambda-n} \cdot \mathrm{P}\left(X_{\lambda}=n\right), & 0 \leqslant n < \lambda \\
\mathrm{P}\left(X_{\lambda} \geqslant n\right) \leqslant \frac{\lambda}{n-\lambda} \cdot \mathrm{P}\left(X_{\lambda}=n\right), & n \geqslant \lambda+1
\end{array}
$$

Remark. From these inequalities, in particular, it follows that

$$
\lim _{n \rightarrow \infty} \frac{\mathrm{P}\left(X_{\lambda} \geqslant n\right)}{\mathrm{P}\left(X_{\lambda}=n\right)}=\lim _{\lambda \rightarrow \infty} \frac{\mathrm{P}\left(X_{\lambda} \leqslant n\right)}{\mathrm{P}\left(X_{\lambda}=n\right)}=1
$$

In other words, the main "mass" of the Poisson distribution on the interval $[0, n]$ is concentrated at the endpoint $\{n\}$ when $\lambda \gg n$ ("》"-significantly larger). If, on the other hand, $n \gg \lambda$, then on the ray $[n, \infty)$ almost all the "mass" will be concentrated at the point $\{n\}$.

(b) By the central limit theorem for the Poisson distribution,

$$
\frac{X_{\lambda}-\lambda}{\sqrt{\lambda}} \stackrel{d}{\rightarrow} \xi, \lambda \rightarrow \infty
$$

where $\xi \sim \mathscr{N}(0,1)$. Show, however, that for any fixed $\lambda>0$ the following relation holds:

$$
\frac{\mathrm{P}\left(X_{\lambda} \geqslant n\right)}{\mathrm{P}(\sqrt{\lambda} \xi \geqslant n-\lambda)} \rightarrow \infty, n \rightarrow \infty
$$
