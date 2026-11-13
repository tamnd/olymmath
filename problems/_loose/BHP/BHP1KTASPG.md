---
tag: BHP1KTASPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268601
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A polynomial $f(x)$ with integer coefficients is called $\textit{splitty}$ if and only if for every prime $p$, there exists polynomials $g_p, h_p$ with integer coefficients with degrees strictly smaller than the the degree of $f$, such that all coefficients of $f-g_ph_p$ are divisible by $p$. Compute the sum of all positive integers $n \leq 100$ such that $x^4+16x^2+n$ is $\textit{splitty}$.
