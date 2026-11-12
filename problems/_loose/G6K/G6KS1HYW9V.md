---
tag: G6KS1HYW9V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9319
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial $S(x)=1+3 x+5 x^{2}+7 x^{3}+\ldots+201 x^{100}$. Is it possible, by rearranging the coefficients in it, to obtain a polynomial $T(x)=t_{0}+t_{1} x+t_{2} x^{2}+t_{3} x^{3}+\ldots+t_{100} x^{100}$ such that for all natural numbers $k \geqslant 2$ the difference $S(k)-T(k)$ is not divisible by 2020?
