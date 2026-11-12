---
tag: 56F4G0BVKN
kind: problem
type: answer
answer: "-12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5176
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The right side of the inequality is zero when $|x| \leqslant 10$ (for other $x$ it is undefined). Denoting $\alpha=\frac{\pi x}{4}$, we get:

$$
\begin{aligned}
& \frac{\sin 2 \alpha-\cos 2 \alpha+1}{\sin 2 \alpha+\cos 2 \alpha-1} \geqslant 0 \Longleftrightarrow \frac{2 \sin \alpha \cos \alpha+2 \sin ^{2} \alpha}{2 \sin \alpha \cos \alpha-2 \sin ^{2} \alpha} \geqslant 0 \Longleftrightarrow \\
& \Longleftrightarrow\left\{\begin{array} { l }
{ \frac { \cos \alpha + \sin \alpha } { \cos \alpha - \sin \alpha } \geqslant 0 , } \\
{ \sin \alpha \neq 0 }
\end{array} \Longleftrightarrow \left\{\begin{array}{l}
\frac{1+\operatorname{tg} \alpha}{1-\operatorname{tg} \alpha} \geqslant 0 \\
\operatorname{tg} \alpha \neq 0
\end{array}\right.\right.
\end{aligned}
$$

Therefore, $x \in[-1+4 k ; 4 k) \cup(4 k ; 4 k+1)$. On the interval $[-10,10]$, the integers are $-9,-5,-1,3,7$, of which the numbers $-9,-5,-1,3$ are within the specified interval, and their sum is -12.
