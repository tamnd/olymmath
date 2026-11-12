---
tag: X812BWYQ3D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi \sim \mathscr{N}\left(a, \sigma^{2} I_{n}\right)$ be a Gaussian vector in $\mathbb{R}^{n}$ with mean $\mathrm{E} \xi=a$ and covariance matrix $\sigma^{2} I_{n}=\mathrm{D} \xi=\mathrm{E}(\xi-\mathrm{E} \xi)(\xi-\mathrm{E} \xi)^{\top}$, where $I_{n}$ is the identity matrix of size $n \times n$ and $\sigma>0$. Let also $P, Q$ be orthogonal projectors onto mutually orthogonal subspaces in $\mathbb{R}^{n}$, i.e.,

$$
P Q=Q P=O_{n \times n}, P^{2}=P=P^{\top}, Q^{2}=Q=Q^{\top}
$$

where $O_{n \times n}$ is the zero matrix of size $n \times n$. Prove that the random vectors $P \xi$ and $Q \xi$ are independent, and that

$$
P \xi \sim \mathscr{N}\left(P a, \sigma^{2} P\right), Q \xi \sim \mathscr{N}\left(Q a, \sigma^{2} Q\right)
$$

In particular, if $Q a=0$, then

$$
\frac{\|Q \xi\|^{2}}{\sigma^{2}}=\frac{\xi^{\top} Q \xi}{\sigma^{2}} \sim \chi_{\mathrm{rk} Q}^{2}
$$
