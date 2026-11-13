---
tag: KX3J85BF9R
kind: problem
type: answer
answer: a_n = -\frac{3}{2n+3}, \, b_n = 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242048
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(1) Let $f(x)$ be the differentiable and increasing function such that $f(0)=0.$Prove that $\int_{0}^{1}f(x)f'(x)dx\geq \frac{1}{2}\left(\int_{0}^{1}f(x)dx\right)^{2}.$

(2) $g_{n}(x)=x^{2n+1}+a_{n}x+b_{n}\ (n=1,\ 2,\ 3,\ \cdots)$ satisfies $\int_{-1}^{1}(px+q)g_{n}(x)dx=0$ for all linear equations $px+q.$
Find $a_{n},\ b_{n}.$
