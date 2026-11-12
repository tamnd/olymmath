---
tag: 8GP1YWCPTP
kind: problem
type: answer
answer: \frac{\pi}{2}+2\pik,k=0,1,2,3;\pi(2+1),\inZ
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=2481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The expression $\eta(x)-\eta(x-7 \pi)=\left\{\begin{array}{l}1, x \in[0,7 \pi), \\ 0, x \in(-\infty ; 0) \cup[7 ;+\infty) .\end{array}\right.$

Case 1. $x \in[0,7 \pi)$. The equation takes the form

$$
\sin x=1+\cos x
$$

Using the method of introducing an auxiliary argument, we get

$$
\sin \left(x-\frac{\pi}{4}\right)=\frac{1}{\sqrt{2}}
$$

Solving this equation

$$
\left[\begin{array}{l}
x=\frac{\pi}{2}+2 \pi k, k \in Z \\
x=\pi+2 \pi m, m \in Z
\end{array}\right.
$$

Considering $x \in[0,7 \pi)$, we have

$$
\left[\begin{array}{l}
x=\frac{\pi}{2}+2 \pi k, k=0,1,2,3 \\
x=\pi+2 \pi m, m=0,1,2
\end{array}\right.
$$

Case 2. $x \in(-\infty ; 0) \cup[7 ;+\infty)$. The equation takes the form

$$
1+\cos x=0
$$

Solving this equation

$$
x=\pi+2 \pi m, m \in Z
$$

Considering $x \in(-\infty ; 0) \cup[7 ;+\infty)$, we have

$$
x=\pi+2 \pi m, m=-1,-2,-3, \ldots, 3,4, \ldots
$$

Combining the solutions obtained in the cases considered above, we find $x=\frac{\pi}{2}+2 \pi k, k=0,1,2,3, x=\pi(2 m+1), m \in Z$.
