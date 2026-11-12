---
tag: K8Q1TX1A5S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(\Omega, \mathscr{F}, \mathrm{P})$ be some discrete probability space and $\xi=\xi(\omega)$ be a random variable taking values $x_{1}, \ldots, x_{k}$ with probabilities $\mathrm{P}\left\{\xi=x_{i}\right\}=p_{i}$. The entropy of the random variable $\xi$ (or the experiment $\mathscr{E}_{\xi}$, consisting of observations of the values of $\xi$) is defined as

$$
H(\xi)=-\sum_{i=1}^{k} p_{i} \log _{2} p_{i}
$$

If $(\xi, \eta)$ is a pair of random variables and $\mathrm{P}\left\{\xi=x_{i}, \eta=y_{j}\right\}=p_{i j}$, $i=1, \ldots, k, j=1, \ldots, l$, then the entropy $H(\xi, \eta)$ of this pair is defined similarly:

$$
H(\xi, \eta)=-\sum_{i=1}^{k} \sum_{j=1}^{l} p_{i j} \log _{2} p_{i j}
$$

Show that if $\xi$ and $\eta$ are independent, then

$$
H(\xi, \eta)=H(\xi)+H(\eta)
$$
