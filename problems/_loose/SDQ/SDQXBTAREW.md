---
tag: SDQXBTAREW
kind: problem
type: answer
answer: (6;6)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=21852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Note that when $a=0$, the system is undefined. Let the solution of the system be of the form

$\left(x_{0} ; x_{0}\right)$. Then we get $\left\{\begin{array}{l}3 x_{0}+2 x_{0}=15 a \\ \frac{1}{a} x_{0}+x_{0}=9\end{array}\right.$, which is $\left\{\begin{array}{l}5 x_{0}=15 a \\ \frac{1+a}{a} \cdot x_{0}=9\end{array}\right.$, from which $x_{0}=3 a$.

Transform the second equation of the system by substitution. We get $\frac{1+a}{a} \cdot 3a=9$. Solving the equation with the restriction $a$ not equal to 0, we get that $a=2$. In this case, the solution of the system is the point $(6 ; 6)$
