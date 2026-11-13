---
tag: C5VPCVEMGJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There exist some number of ordered triples of real numbers $(x,y,z)$ that satisfy the following system of equations:
\begin{align*}
x+y+2z &= 6\\
x^2+y^2+2z^2 &= 18\\
x^3+y^3+2z^3&=54
\end{align*}
Given that the sum of all possible positive values of $x$ can be expressed as $\frac{a+b\sqrt{c}}{d}$ where $a$,$b$,$c$, and $d$ are positive integers, $c$ is squarefree, and $\gcd(a,b,d)=1$, find the value of $a+b+c+d$.
