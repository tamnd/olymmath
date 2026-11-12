---
tag: PMKBP75Q4G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33551
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi$ be a random variable with a binomial distribution

$$
\mathrm{P}_{\theta}\{\xi=k\}=C_{n}^{k} \theta^{k}(1-\theta)^{n-k}, 0 \leqslant k \leqslant n,
$$

where $n$ is a given number and $\theta$ is an "unknown parameter" that needs to be estimated based on (a single) observation of this random variable $\xi$.

The standard estimate of $\theta$ is $T(\xi)=\xi / n$, which has the property of being unbiased: for all values of $\theta \in[0,1]$, the following equality holds:

$$
\mathrm{E}_{\theta} T(\xi)=\theta
$$

Show that in the class of unbiased estimates $\widetilde{T}=\widetilde{T}(\xi)$, this estimate is efficient:

$$
\mathbf{E}_{\theta}(T(\xi)-\theta)^{2}=\inf _{\widetilde{T}} \mathbf{E}_{\theta}(\widetilde{T}(\xi)-\theta)^{2}
$$

Also show that if $n=3$ and it is known a priori that $\theta \in\left(\frac{1}{4}, \frac{3}{4}\right)$, then the estimate $\widehat{T}(\xi) \equiv \frac{1}{2}$, which is biased for any $\theta \neq \frac{1}{2}$, will be "better" than the unbiased estimate $T(\xi)=\frac{\xi}{3}$:

$$
\mathbf{E}_{\theta}[\widehat{T}(\xi)-\theta]^{2}<\mathbf{E}_{\theta}[T(\xi)-\theta]^{2}
$$

i.e.,

$$
\mathrm{E}_{\theta}\left[\frac{1}{2}-\theta\right]^{2}<\mathrm{E}_{\theta}\left[\frac{\xi}{3}-\theta\right]^{2}
$$

Consider the question of whether a similar result holds for any $n$.
