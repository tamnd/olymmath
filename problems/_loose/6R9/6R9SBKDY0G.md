---
tag: 6R9SBKDY0G
kind: problem
type: answer
answer: \gamma=\alpha/2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34139
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(On the statistics of the normal distribution $\mathscr{N}\left(a, \sigma^{2}\right)$: $a=a_{0}, \sigma^{2}$ is unknown.) If $a$ is known $\left(a=a_{0}\right)$, then it is natural to take not the value $s^{2}(x)=\frac{1}{n} \sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}$, but the value

$$
s_{0}^{2}(x)=\frac{1}{n} \sum_{i=1}^{n}\left(x_{i}-a_{0}\right)^{2}
$$

(a) Show that

$$
\mathrm{E}_{0}^{2}(\xi)=\sigma^{2} (\text { unbiasedness }), \mathrm{D}_{0}^{2}(\xi)=\frac{2 \sigma^{4}}{n}
$$

(b) Establish that the sample variance $s_{0}^{2}(x)$ is (for $a=a_{0}$) an efficient estimate of the value $\sigma^{2}$, i.e., unbiased and with the smallest variance. For this, establish that the Rao-Cramer inequality for unbiased estimates $T(x)$ of the value $\sigma^{2}$ has the following form:

$$
\mathrm{D} T(\xi) \geqslant-\frac{1}{n \mathbf{E}\left[\frac{\partial^{2} \ln p_{\left(a_{0}, \sigma^{2}\right)}\left(\xi_{1}\right)}{\partial\left(\sigma^{2}\right)^{2}}\right]}=\frac{2 \sigma^{4}}{n}
$$

To address the question of the accuracy of the estimate $s_{0}^{2}(x)$, we will construct a confidence interval for $\sigma^{2}$ using the following considerations.

(c) Let for $x=\left(x_{1}, \ldots, x_{n}\right)$

$$
\chi_{n}^{2}(x)=\sum_{i=1}^{n}\left(\frac{x_{i}-a_{0}}{\sigma}\right)^{2}
$$

Since

$$
\chi_{n}^{2}(\xi) \stackrel{d}{=} \sum_{i=1}^{n} \eta_{i}^{2} \left(\sim \chi_{n}^{2}\right)
$$

in accordance with formula (34) from B1.II. 8, the quantity $\chi_{n}^{2}(\xi)$ has a $\chi^{2}$-distribution with $n$ degrees of freedom and density $(x \geqslant 0)$

$$
f_{n}(x)=\frac{x^{\frac{n}{2}-1} e^{-x / 2}}{2^{n / 2} \Gamma(n / 2)}
$$

Since also

$$
s_{0}^{2}(x)=\frac{\chi_{n}^{2}(x) \sigma^{2}}{n}
$$

we obtain that

$$
\mathrm{P}_{\left(a_{0}, \sigma_{0}^{2}\right)}\left(\frac{s_{0}^{2}(x) n}{\sigma^{2}} \leqslant x\right)=F_{n}(x)=\int_{0}^{x} f_{n}(t) d t
$$

(Note that the $\chi^{2}$-distribution is tabulated for many values of $n=1,2, \ldots$) Therefore, for a given $0<\alpha<1$, we can find such $q_{\alpha / 2}$ and $q_{1-\alpha / 2}$ that

$$
\int_{0}^{q_{\alpha / 2}} f_{n}(t) d t=\frac{\alpha}{2}, \int_{q_{1-\alpha / 2}}^{\infty} f_{n}(t) d t=\frac{\alpha}{2}
$$

Then

$$
\int_{q_{\alpha / 2}}^{q_{1}-\alpha / 2} f_{n}(t) d t=1-\alpha
$$

and the interval

$$
\left(\frac{s_{0}^{2}(x) n}{q_{1-\alpha / 2}}, \frac{s_{0}^{2}(x) n}{q_{\alpha / 2}}\right)
$$

will be a confidence interval for $\sigma^{2}$ with reliability coefficient $1-\alpha$, since

$$
\left\{\frac{s_{0}^{2}(x) n}{q_{1-\alpha / 2}} \leqslant \sigma^{2} \leqslant \frac{s_{0}^{2}(x) n}{q_{\alpha / 2}}\right\}=\left\{q_{\alpha / 2} \leqslant \chi_{n}^{2}(x) \leqslant q_{1-\alpha / 2}\right\}
$$

Let $q_{\gamma}$ and $q_{1-(\alpha-\gamma)}$ be chosen such that

$$
\int_{0}^{q_{\gamma}} f_{n}(t) d t=\gamma, \int_{q_{1-(\alpha-\gamma)}}^{\infty} f_{n}(t) d t=\alpha-\gamma
$$

where $0 \leqslant \gamma \leqslant \alpha$. In other words, for all $\gamma \in[0, \alpha]$ we have

$$
\int_{q_{\gamma}}^{q_{1-(\alpha-\gamma)}} f_{n}(t) d t=1-\alpha
$$

The question is, what is that $\gamma$ which leads to the narrowest confidence interval for $\sigma^{2}$ with reliability coefficient $1-\alpha$? Is it true that $\gamma=\alpha / 2$?
