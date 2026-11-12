---
tag: FFW0GGWVFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\xi_{1}, \xi_{2}, \ldots$ be positive i.i.d. random variables with a distribution function $F=F(x)$ such that

$$
F(x)=\lambda x+o(x), x \rightarrow 0
$$

for some $\lambda>0$. Denoting $\xi_{\min }=\xi_{1} \wedge \ldots \wedge \xi_{n}$, show that

$$
n \xi_{\text {min }} \xrightarrow{d} \eta, n \rightarrow \infty,
$$

where $\eta$ is an exponentially distributed random variable with parameter $\lambda$.
