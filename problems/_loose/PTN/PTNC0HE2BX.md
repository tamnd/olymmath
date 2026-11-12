---
tag: PTNC0HE2BX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the polynomial $F(x)=1+2 x+3 x^{2}+4 x^{3}+\ldots+100 x^{99}$. Is it possible, by rearranging the coefficients in it, to obtain a polynomial $G(x)=g_{0}+g_{1} x+g_{2} x^{2}+g_{3} x^{3}+\ldots+g_{99} x^{99}$ such that for all natural numbers $k \geqslant 2$ the difference $F(k)-G(k)$ is not divisible by 100?
