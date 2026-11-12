---
tag: NQJEQ7RFCX
kind: problem
type: answer
answer: "2015"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
First method: Since $x_{1}^{3}-2015 x_{1}+2016=0$ and $x_{2}^{3}-2015 x_{2}+2016=0$, then $x_{1}^{3}-x_{2}^{3}=2015 \cdot\left(x_{1}-x_{2}\right)$. Therefore, $x_{1}^{2}+x_{1} x_{2}+x_{2}^{2}=2015$.

Second method: By Vieta's theorem (but then it needs to be justified that there are three distinct roots): $x_{1}+x_{2}+x_{3}=0, x_{1} x_{2} x_{3}=-2016$. Therefore,

$$
\begin{aligned}
x_{1}^{2}+x_{1} x_{2}+x_{2}^{2}=\left(x_{1}+x_{2}\right)^{2}-x_{1} x_{2}=\left(-x_{3}\right)^{2}+\frac{2016}{x_{3}} & \\
=\frac{x_{3}^{3}+2016}{x_{3}} & =\frac{2015 x_{3}}{x_{3}}=2015
\end{aligned}
$$
