---
tag: MA2617YDSX
kind: problem
type: answer
answer: =\frac{8}{3},b=\frac{8}{5},=-8
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=9254
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
"Flip" each of the equations in the system:

$$
\left\{\begin{array}{l}
\frac{a+b}{a b}=1 \\
\frac{b+c}{b c}=\frac{1}{2} \\
\frac{c+a}{c a}=\frac{1}{4}
\end{array}\right.
$$

(The transformation is equivalent since none of the right-hand sides can turn into zero).

Notice that $\frac{a+b}{a b}=\frac{1}{a}+\frac{1}{b}$ and so on. Therefore, we have obtained a system of linear equations in $\frac{1}{a}, \frac{1}{b}$, and $\frac{1}{c}$.

Solving it, we get $\frac{1}{a}=\frac{3}{8}, \frac{1}{b}=\frac{5}{8}, \frac{1}{c}=-\frac{1}{8}$.
