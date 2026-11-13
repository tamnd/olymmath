---
tag: PJYF5R94D3
kind: problem
type: answer
answer: \frac{1}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220066
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an even non-negative continous function with $\int _{\mathbb{R}} p(x) dx =1$ and let $n$ be a positive integer. Let $\xi_1,\xi_2,\xi_3 \dots ,\xi_n$ be independent identically distributed random variables with density function $p$ .
Define

\begin{align*}
X_{0} & = 0 \\
X_{1} & = X_0+ \xi_1 \\
& \vdotswithin{ = }\notag \\
X_{n} & = X_{n-1} + \xi_n
\end{align*}

Prove that the probability that all random variables $X_1,X_2 \dots X_{n-1}$ lie between $X_0$ and $X_n$ is $\frac{1}{n}$.

*Proposed by Fedor Petrov (St.Petersburg State University).*
