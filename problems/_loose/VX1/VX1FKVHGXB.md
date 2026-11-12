---
tag: VX1FKVHGXB
kind: problem
type: answer
answer: -\frac{1}{\sqrt{5}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4789
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation $\arccos \left(3 x^{2}\right)+2 \arcsin x=0$.

- Compute the cosine of both sides of the equation $\arccos \left(3 x^{2}\right)=-2 \arcsin x$

$3 x^{2}=\cos (-2 \arcsin x)=1-2 \sin ^{2}(\arcsin x)=1-2 x^{2}$

$$
\begin{gathered}
3 x^{2}=1-2 x^{2} \\
x^{2}=\frac{1}{5} ; x= \pm \frac{1}{\sqrt{5}}
\end{gathered}
$$

Instead of checking, note that $3 x^{2} \geq 0$;

$$
\begin{gathered}
0 \leq \arccos \left(3 x^{2}\right) \leq \frac{\pi}{2} \\
-\frac{\pi}{2} \leq 2 \arcsin x \leq 0 \\
-\frac{\pi}{4} \leq \arcsin x \leq 0 ;-\frac{\sqrt{2}}{2} \leq x \leq 0
\end{gathered}
$$
