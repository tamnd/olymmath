---
tag: NVQD2V1X5P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177885
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(x_{n}\right)_{n \geq 1}$ and $\left(y_{n}\right)_{n \geq 1}$ be two sequences of real numbers defined as follows:

$$
\begin{aligned}
& x_{1}>0, x_{n+1}=\frac{x_{n}}{\left(1+x_{n}\right)^{2}}, \forall n \geq 1 \\
& y_{n}>0, y_{n+1} \leq \frac{y_{n}}{\left(1+y_{n}\right)^{2}}, \forall n \geq 1
\end{aligned}
$$

a) Show that the sequences $\left(x_{n}\right)_{n \geq 1}$ and $\left(y_{n}\right)_{n \geq 1}$ are convergent and determine their limits.

b) Show that $\lim _{n \rightarrow \infty}\left(1+x_{n}\right)^{n}=\sqrt{e}$.

c) Show that the sequence $\left(n y_{n}\right)_{n \geq 1}$ is bounded.

Cătălin Zîrnă
