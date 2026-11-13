---
tag: AY1A5MJMH8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218965
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=157
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus 69th Belarusian Mathematical Olympiad
---
Given a quadratic trinomial $p(x)$ with integer coefficients such that $p(x)$ is not divisible by $3$ for all integers $x$.
Prove that there exist polynomials $f(x)$ and $h(x)$ with integer coefficients such that
$$
p(x)\cdot f(x)+3h(x)=x^6+x^4+x^2+1.
$$

*(I. Gorodnin)*
