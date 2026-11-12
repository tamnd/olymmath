---
tag: CVQNTZBJYG
kind: problem
type: answer
answer: (-3;-2)\cup(-2;1)\cup(1;2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Substitution $2^{x}=t>0$. The equation $t^{4}-6 t^{3}+8 t^{2}+2(1-a) t-(a-1)^{2}=0$ is quadratic relative to $(a-1):(a-1)^{2}+2 t(a-1)-t^{4}+6 t^{3}-8 t^{2}=0$. Since $D / 4=t^{2}+t^{4}-6 t^{3}+8 t^{2}=t^{2}(t-3)^{2}$, then

$$
\left[\begin{array}{l}
a-1=-t+t^{2}-3 t=t^{2}-4 t \\
a-1=-t-t^{2}+3 t=-t^{2}+2 t
\end{array}\right.
$$

This means the problem is equivalent to finding the conditions under which the system

$$
\left\{\begin{array}{l}
{\left[\begin{array}{l}
t^{2}-4 t+1-a=0 \\
t^{2}-2 t-1+a=0
\end{array}\right.} \\
t>0
\end{array}\right.
$$

has exactly three solutions.

Possible cases:

1) $D_{1}>0,1-a>0, D_{2}=0 \Rightarrow$ no solutions;
2) $D_{1}=0, D_{2}>0,-1+a>0 \Rightarrow$ no solutions;
3) $D_{1}>0,1-a \leqslant 0, D_{2}>0,-1+a>0 \Rightarrow a \in(1 ; 2)$;
4) $D_{1}>0,1-a>0, D_{2}>0,-1+a \leqslant 0 \Rightarrow a \in(-3 ; 1)$;

And don't forget to check in cases 3) 4) the moment when the equations may have a common root. The equations have a common root at $a=1$ and at $a=-2$.
