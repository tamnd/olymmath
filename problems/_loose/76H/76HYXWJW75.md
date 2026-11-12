---
tag: 76HYXWJW75
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33923
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi \sim \mathscr{N}(0,1)$ and $\zeta=e^{\xi}$ be a log-normal random variable (with parameters $a=0$ and $\sigma^{2}=1$), having the density

$$
f_{\zeta}(x)= \begin{cases}\frac{x^{-\frac{\ln x}{2}}}{\sqrt{2 \pi} x}, & x>0 \\ 0, & x \leqslant 0\end{cases}
$$

(a) Establish that

$$
\mathrm{E} \zeta^{n}=\int_{\mathbb{R}} x^{n} f_{\zeta}(x) d x=e^{n^{2} / 2}, n \geqslant 1 .
$$

(b) Modify the density $f_{\zeta}$ so that it becomes a new probability density function with the same moments as $f_{\zeta}$.

(c) Following [7], show that the discrete random variable $\eta$, for which

$$
\mathbf{P}\left(\eta=e^{k}\right)=C e^{-k^{2} / 2}
$$

where $k \in \mathbb{Z}_{+}$, and $C>0$ is a normalizing constant, has the same moments as $\zeta$.
