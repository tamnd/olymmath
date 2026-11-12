---
tag: CRP1R0NVRT
kind: problem
type: answer
answer: e^{-\lambda}\frac{\lambda^{k}}{k!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33452
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider $n$ particles placed into $M$ cells according to the Maxwell-Boltzmann statistics ("distinguishable particles, placement without restriction"). Following the classical Laplace method of assigning probabilities by formula (10) from B1.I.1 (which corresponds to the "random" nature of particle placement), show that the probability $P_{k}(n ; M)$ that a fixed cell contains $k$ particles is given by the formula

$$
P_{k}(n ; M)=C_{n}^{k} \frac{(M-1)^{n-k}}{M^{n}}
$$

From this, derive that if $n \rightarrow \infty, M \rightarrow \infty$, but such that $n / M \rightarrow \lambda > 0$, then

$$
P_{k}(n ; M) \rightarrow e^{-\lambda} \frac{\lambda^{k}}{k!}
$$
