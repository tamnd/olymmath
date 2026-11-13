---
tag: K53PHT4RNG
kind: problem
type: answer
answer: f(x)\equiv(15x^{3}-7x^{2}-8x)-k(15x^{3}-37x^{2}+30x-8)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=175682
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the coefficients of the following cubic polynomial

$$
f(x) \equiv A x^{3}+B x^{2}+C x+D
$$

if it is known that when $x=1, f(1)=0$, and

$$
\begin{gathered}
x=\frac{2}{3}, f\left(\frac{2}{3}\right)=-4 \text { and finally when } \\
x=\frac{4}{5}, f\left(\frac{4}{5}\right)=-\frac{16}{5}
\end{gathered}
$$
