---
tag: PXKTGB3EVY
kind: problem
type: answer
answer: "20:5:8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=11259
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three liquids are given, the densities of which are in the ratio $\rho_{1}: \rho_{2}: \rho_{3}=6: 3: 2$. From these liquids, a mixture is prepared, in which the first liquid should be at least 3.5 times more than the second. In what ratio should the masses of these liquids be taken so that after mixing, the density of the mixture is equal to the arithmetic mean of the densities of the original liquids?

Let the density of the first liquid be $\rho_{1}=6 k$. Then $\rho_{2}=3 k, \rho_{3}=2 k$. The arithmetic mean density $\rho=\frac{\rho_{1}+\rho_{2}+\rho_{3}}{3}=\frac{11}{3} k$. Introduce the notations $\frac{m_{2}}{m_{1}}=x, \frac{m_{3}}{m_{1}}=y$. By the condition $\frac{1}{x} \geq 3.5$. The resulting density of the mixture can be expressed by the formula $\frac{m_{1}+m_{2}+m_{3}}{\frac{m_{1}}{\rho_{1}}+\frac{m_{2}}{\rho_{2}}+\frac{m_{3}}{\rho_{3}}}=\rho$. Taking into account the notations and some transformations, we get:

$\frac{\rho}{6 k}=\frac{1+x+y}{1+2 x+3 y} \Leftrightarrow \frac{1+x+y}{1+2 x+3 y}=\frac{11}{18} \Leftrightarrow 4 x+15 y=7$. Let $x=\frac{1}{4}$, then $y=\frac{2}{5}$. This means that we can set $m_{1}=20 z, m_{2}=5 z, m_{3}=8 z$.
