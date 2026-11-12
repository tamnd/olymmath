---
tag: 6VC571XKGY
kind: problem
type: answer
answer: \lambda^{*}=\bar{x}_{{B}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32443
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The random variable $X$ is distributed according to the Poisson distribution

$$
P_{m}\left(x_{i}\right)=\lambda x_{i} \mathrm{e}^{-\lambda / x_{i}!}
$$

where $m$ is the number of trials conducted in one experiment; $x_{i}$ is the number of occurrences of the event in the $i$-th experiment.

Find the point estimate of the unknown parameter $\lambda$, which defines the Poisson distribution, using the method of moments based on the sample $x_{1}, x_{2}, \ldots, x_{n}$.
