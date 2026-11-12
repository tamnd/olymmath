---
tag: 193PTYZM0K
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(On the statistics of the normal distribution $\mathscr{N}\left(a, \sigma^{2}\right): a$ is unknown, $\sigma^{2}=\sigma_{0}^{2}$.)

In this and the following problem, it is assumed that $\xi_{1}, \ldots, \xi_{n}$ are independent random variables distributed according to the law $\mathscr{N}\left(a, \sigma^{2}\right)$.

Let $a$ be unknown, $\sigma^{2}$ be known, and $\sigma^{2}=\sigma_{0}^{2}$.

(a) Show that for $\bar{\xi}=\frac{1}{n} \sum_{i=1}^{n} \xi_{i}$ the following relations hold:

$$
\mathrm{E} \bar{\xi}=a \text { (unbiasedness), } \mathrm{D} \bar{\xi}=\frac{\sigma_{0}^{2}}{n} .
$$

(b) Establish that (for $\sigma^{2}=\sigma_{0}^{2}$) the sample mean $\bar{x}$ is an efficient estimate, i.e., unbiased and with the smallest variance. To this end, show that in the considered case, for unbiased estimates $T(x)$ of the parameter $a$, the Rao-Cramer inequality holds:

$$
\mathrm{D} T(\xi) \geqslant-\frac{1}{n \mathbf{E}\left[\frac{\partial^{2} \ln p_{\left(a, \sigma_{0}^{2}\right)}\left(\xi_{1}\right)}{\partial a^{2}}\right]}=\frac{\sigma_{0}^{2}}{n}
$$

where

$$
p_{\left(a, \sigma_{0}^{2}\right)}(x)=\frac{1}{\sqrt{2 \pi \sigma_{0}^{2}}} e^{-\frac{(x-a)^{2}}{2 \sigma_{0}^{2}}}
$$

(c) Show that

$$
\sqrt{n} \frac{\bar{\xi}-a}{\sigma_{0}} \sim \mathscr{N}(0,1)
$$

and if $z_{\alpha}$ is chosen such that

$$
1-\alpha=\frac{1}{\sqrt{2 \pi}} \int_{-z_{\alpha}}^{z_{\alpha}} e^{-t^{2} / 2} d t \left(=2 \Phi\left(z_{\alpha}\right)-1\right)
$$

where $0<\alpha<1$, then the interval

$$
\left(\bar{x}-\frac{\sigma_{0}}{\sqrt{n}} z_{\alpha}, \bar{x}+\frac{\sigma_{0}}{\sqrt{n}} z_{\alpha}\right)
$$

will be a confidence interval for $a$ with reliability coefficient $1-\alpha$, i.e., with "coverage probability"

$$
\mathrm{P}_{\left(a, \sigma_{0}^{2}\right)}\left(\bar{\xi}-\frac{\sigma_{0}}{\sqrt{n}} z_{\alpha} \leqslant a \leqslant \bar{\xi}+\frac{\sigma_{0}}{\sqrt{n}} z_{\alpha}\right)=1-\alpha
$$

where $\mathrm{P}_{\left(a, \sigma_{0}^{2}\right)}$ is the distribution with density $p_{\left(a, \sigma_{0}^{2}\right)}$.
