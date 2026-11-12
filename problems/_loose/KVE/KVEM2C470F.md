---
tag: KVEM2C470F
kind: problem
type: answer
answer: \frac{\pi^{2}}{6}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33940
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(a) It is said that a random variable $\xi$ with natural values is distributed according to the discrete Pareto law with parameter $\rho>0$, if

$$
\mathrm{P}(\xi=n)=\frac{1}{\zeta(\rho+1) n^{\rho+1}}, n \in \mathbb{N}
$$

where $\zeta(s)=\sum_{n \geqslant 1} n^{-s}$ is the Riemann zeta function. Show that

$$
\mathrm{E} \xi=\frac{\zeta(\rho)}{\zeta(\rho+1)}
$$

(b) (See [29].) Establish that

$$
\zeta(2)=\sum_{n \geqslant 1} \frac{1}{n^{2}}=\frac{\pi^{2}}{6}
$$

by evaluating the auxiliary integral

$$
\int_{[0,1]^{2}} \frac{d x d y}{1-x y}
$$
