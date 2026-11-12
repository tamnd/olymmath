---
tag: SY38MDWKV8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34140
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(On the statistics of the normal distribution $\mathscr{N}\left(a, \sigma^{2}\right)$: $a$ and $\sigma^{2}$ are unknown.)

(a) Show that in the considered case, unbiased estimators for $a$ and $\sigma^{2}$ are, for $n>1$,

$$
\bar{x}=\frac{1}{n} \sum_{i=1}^{n} x_{i}, s_{1}^{2}(x) \equiv \frac{n}{n-1} s^{2}(x)=\frac{1}{n-1} \sum_{i=1}^{n}\left(x_{i}-\bar{x}\right)^{2}
$$

(b) Show that the statistic

$$
t_{n-1}(x)=\frac{\bar{x}-a}{s_{1}(x) / \sqrt{n}}
$$

has a Student's t-distribution with $n-1$ degrees of freedom; see Table 3 in B1.II.3.

(c) Based on the Student's t-distribution for $t_{n-1}(\xi)$ and considering that $t_{n-1}(x)=\frac{\bar{x}-a}{s_{1}(x) / \sqrt{n}}$, construct confidence intervals for $a$ with a confidence level of $1-\alpha$.

(d) Establishing that $(n-1) \frac{s_{1}^{2}(\xi)}{\sigma^{2}} \sim \chi_{n-1}^{2}$, construct confidence intervals for $\sigma$ with a confidence level of $1-\alpha$.
