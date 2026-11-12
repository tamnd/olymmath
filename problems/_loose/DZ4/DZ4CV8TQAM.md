---
tag: DZ4CV8TQAM
kind: problem
type: answer
answer: y(x)+\lambda\int_{0}^{\pi/2}G(x,\xi)y(\xi)\xi=\frac{1}{6}x^{3}-\frac{\pi^{2}}{24}x
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31164
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Reduce the boundary value problem

$$
\begin{gathered}
y^{\prime \prime}+\lambda y=x \\
y(0)=y\left(\frac{\pi}{2}\right)=0
\end{gathered}
$$

to an integral equation.
