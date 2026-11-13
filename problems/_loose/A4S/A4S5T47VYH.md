---
tag: A4S5T47VYH
kind: problem
type: answer
answer: f(x) = \frac{p(x)}{q(x)}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=254354
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a function on defined on $|x|<1$ such that $f\left (\tfrac1{10}\right )$ is rational and $f(x)= \sum_{i=1}^{\infty} a_i x^i $ where $a_i\in{\{0,1,2,3,4,5,6,7,8,9\}}$. Prove that $f$ can be written as $f(x)= \frac{p(x)}{q(x)}$ where $p(x)$ and $q(x)$ are polynomials with integer coefficients.
