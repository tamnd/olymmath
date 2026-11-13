---
tag: KJWHTM5GYX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left(a_{1},\ a_{2},\ a_{3},\ ...\right)$ be a sequence of reals such that

$a_{n}\geq\frac{\left(n-1\right)a_{n-1}+\left(n-2\right)a_{n-2}+...+2a_{2}+1a_{1}}{\left(n-1\right)+\left(n-2\right)+...+2+1}$

for every integer $n\geq 2$. Prove that

$a_{n}\geq\frac{a_{n-1}+a_{n-2}+...+a_{2}+a_{1}}{n-1}$

for every integer $n\geq 2$.

*Generalization.* Let $\left(b_{1},\ b_{2},\ b_{3},\ ...\right)$ be a monotonically increasing sequence of positive reals, and let $\left(a_{1},\ a_{2},\ a_{3},\ ...\right)$ be a sequence of reals such that

$a_{n}\geq\frac{b_{n-1}a_{n-1}+b_{n-2}a_{n-2}+...+b_{2}a_{2}+b_{1}a_{1}}{b_{n-1}+b_{n-2}+...+b_{2}+b_{1}}$

for every integer $n\geq 2$. Prove that

$a_{n}\geq\frac{a_{n-1}+a_{n-2}+...+a_{2}+a_{1}}{n-1}$

for every integer $n\geq 2$.

darij
