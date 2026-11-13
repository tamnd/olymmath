---
tag: 4X9X4VEA7N
kind: problem
type: answer
answer: 1/(k+1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil Brazilian Math Olympiad
---
Define the polynomials $\binom{x}{j} = \frac{x(x-1)(x-2)\cdots(x-j+1)}{j!}$ for $j$ positive integer and $\binom{x}{0} = 1$.

a. Prove that all non-nil polynomials can be written uniquely as a linear combination of such polynomials $\binom{x}{n}$.

b. Let $c(n,k)$ be the coefficient of $\binom{x}{k}$ in $x^n$ (as described in the previous item). Compute
$$
\frac{c(n, k) + c(n, k + 1)}{c(n + 1, k + 1)}.
$$
