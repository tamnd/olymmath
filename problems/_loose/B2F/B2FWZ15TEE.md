---
tag: B2FWZ15TEE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21656
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let non-constant distinct polynomials $f$ and $g$ with positive leading coefficients be such that

$$
\begin{aligned}
& f(f(x) g(x)) + f(g(x)) \cdot g(f(x)) + f(f(x)) \cdot g(g(x)) = \\
& = g(f(x) g(x)) + f(f(x)) \cdot f(g(x)) + g(f(x)) \cdot g(g(x))
\end{aligned}
$$

Prove that $f$ and $g$ differ by only one coefficient.
