---
tag: KAJZP17V3E
kind: problem
type: answer
answer: =-\frac{2}{3};=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ $ Transform the expression $\left|\frac{x^{2}-6 x+9}{3-x}+\frac{4 x^{2}-5 x}{x}\right|=\left|\frac{(3-x)^{2}}{3-x}+\frac{x(4 x-5)}{x}\right|=|3 x-2|$, we get $f(x)=|3 x-2|, D(f): x \neq 3, x \neq 0$.

Solve the equation $|3 x-2|=|x+a|$ graphically in the system $x O a$ $(3 x-2)^{2}=(x+a)^{2}$

$$
\begin{gathered}
(3 x-2+x+a)(3 x-2-x-a)=0 \\
{\left[\begin{array}{l}
4 x-2+a=0 \\
2 x-2-a=0
\end{array}\right.} \\
{\left[\begin{array}{c}
a=-4 x+2 \\
a=2 x-2
\end{array}\right.}
\end{gathered}
$$

The equation $f(x)=p(x)$ has exactly one solution if $a=-10$;
