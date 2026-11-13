---
tag: 2V632ASWMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57661
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Using de Moivre's formula, prove that $\cos n x = T_{n}(\cos x), \sin n x = \sin x U_{n-1}(\cos x)$, where $T_{n}(z)$ and $U_{n}(z)$ are polynomials. By definition, $U_{0}(z) = 1$.

b) Compute these polynomials explicitly for $n=0,1,2,3,4,5$.

The polynomials $T_{n}(z)$ and $U_{n}(z)$ are called Chebyshev polynomials of the first and second kind, respectively.
