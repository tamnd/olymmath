---
tag: NN92Y4M7KM
kind: problem
type: answer
answer: e^{1/3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $\left(x_{n}\right)_{n \geq 1}$, defined by $\left\{\begin{array}{c}x_{1} \in(0,1) \\ x_{n+1}=x_{n}-x_{n}^{4},(\forall) n \geq 1\end{array}\right.$.

a) Show that the sequence $\left(x_{n}\right)_{n \geq 1}$ is convergent and calculate its limit.
b) Show that $\lim _{n \rightarrow \infty} \sqrt[3]{n} \cdot x_{n}=\frac{1}{\sqrt[3]{3}}$.

c) Calculate $\lim _{n \rightarrow \infty}\left(1+x_{n}^{3}\right)^{n}$.
