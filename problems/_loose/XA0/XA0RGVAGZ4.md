---
tag: XA0RGVAGZ4
kind: problem
type: answer
answer: 2\pi - 4 - \frac{\pi^3}{12}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence of polynomials $P_0(x) = 2$, $P_1(x) = x$ and $P_n(x) = xP_{n-1}(x) - P_{n-2}(x)$ for $n \geq 2$. Let $x_n$ be the greatest zero of $P_n$ in the the interval $|x| \leq 2$. Show that $$\lim \limits_{n \to \infty}n^2\left(4-2\pi +n^2\int \limits_{x_n}^2P_n(x)dx\right)=2\pi - 4-\frac{\pi^3}{12}$$
