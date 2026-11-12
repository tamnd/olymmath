---
tag: SK02XPT7H8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34512
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Show that the system of functions

$$
\left\{\begin{array}{l}
x_{1}(t)=C_{1} e^{-t}+C_{2} e^{3 t} \\
x_{2}(t)=2 C_{1} e^{-t}-2 C_{2} e^{3 t}
\end{array}\right.
$$

is the general solution of the system of equations

$$
\left\{\begin{array}{l}
\frac{d x_{1}}{d t}=x_{1}-x_{2} \\
\frac{d x_{2}}{d t}=x_{2}-4 x_{1}
\end{array}\right.
$$
