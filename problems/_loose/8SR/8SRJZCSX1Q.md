---
tag: 8SRJZCSX1Q
kind: problem
type: answer
answer: (x;y)=(0;0)or(-2;0)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4734
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
This system is equivalent to the following system:

$$
\begin{aligned}
& \left\{\begin{array} { l }
{ | \boldsymbol { y } - 3 x | \geq | 2 \boldsymbol { y } + \boldsymbol { x } | } \\
{ - 1 \leq y - 3 \leq 1 }
\end{array} \Leftrightarrow \left\{\begin{array}{l}
(2 \boldsymbol{y}+\boldsymbol{x})^{2}-(\boldsymbol{y}-3 x)^{2} \leq 0 \\
2 \leq y \leq 4
\end{array}\right.\right. \\
& \left\{\begin{array} { l }
{ ( 2 \boldsymbol { y } + \boldsymbol { y } - \boldsymbol { y } + 3 x ) ( 2 \boldsymbol { y } + \boldsymbol { x } + \boldsymbol { y } - 3 x ) \leq 0 } \\
{ 2 \leq y \leq 4 }
\end{array} \Leftrightarrow \left\{\begin{array}{l}
(\boldsymbol{y}+4 x)(3 \boldsymbol{y}-2 x) \leq 0 \\
2 \leq \boldsymbol{y} \leq 4
\end{array}\right.\right. \\
& \Leftrightarrow\left\{\begin{array}{l}
(\boldsymbol{y}+4 x)\left(\boldsymbol{y}-\frac{2}{3} x\right) \leq 0 \\
2 \leq y \leq 4
\end{array}\right.
\end{aligned}
$$

We construct the lines $y=-4 x$ and $y=\frac{2}{3} \boldsymbol{x}$, and then the region, which will be a trapezoid with vertices $A(3 ; 2), B(-1 / 2 ; 2), C(-1 ; 4), D(6 ; 4)$. Its area is $S=\frac{1}{2} \cdot 2(7+3.5)=10.5$.
