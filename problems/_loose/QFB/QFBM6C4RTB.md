---
tag: QFBM6C4RTB
kind: problem
type: answer
answer: \left| \pi - a_n \right| < \frac{1}{4^{5n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245644
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each integer $n \ge 1$, prove that there is a polynomial $P_{n}(x)$ with rational coefficients such that $x^{4n}(1-x)^{4n}=(1+x)^{2}P_{n}(x)+(-1)^{n}4^{n}$. Define the rational number $a_{n}$ by $$a_{n}= \frac{(-1)^{n-1}}{4^{n-1}}\int_{0}^{1}P_{n}(x) dx, n=1,2, \cdots.$$ Prove that $a_{n}$ satisfies the inequality $$\left\vert \pi-a_{n}\right\vert < \frac{1}{4^{5n-1}}, n=1,2, \cdots.$$
