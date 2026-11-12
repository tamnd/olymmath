---
tag: ZRHB4WW4EY
kind: problem
type: answer
answer: \operatorname{skw}(X)=\frac{q-p}{\sqrt{npq}},\quad\operatorname{kur}(X)=3+\frac{1}{npq}-\frac{6}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33938
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $X$ be a binomial random variable with parameters $n \in \mathbb{N}$ and $p \in [0,1]$. Show that for it, the skewness parameter is given by the formula (where $q=1-p$)

$$
\operatorname{skw}(X)=\frac{\mathrm{E}(X-\mathrm{E} X)^{3}}{(\mathrm{D} X)^{3 / 2}}=\frac{q-p}{\sqrt{n p q}}
$$

In particular, if $0<p<1$, then $\operatorname{skw}(X) \neq 0$; in this case, the distribution is said to be skewed to the right. Also find the value of the kurtosis parameter

$$
\operatorname{kur}(X)=\frac{\mathrm{E}(X-\mathrm{E} X)^{4}}{(\mathrm{D} X)^{2}}
$$
