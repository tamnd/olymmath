---
tag: ASWQQ12MEZ
kind: problem
type: answer
answer: "2"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179191
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any two positive numbers $\mathrm{x}$ and y, consider the determinant:

$$
\Delta(x ; y)=\left|\begin{array}{lll}
x & y & y \\
y & x & y \\
y & y & x
\end{array}\right|
$$

a) Show that $\Delta(x ; y) \geq 0,(\forall) x, y \in[0, \infty)$.

b) Calculate $\lim _{x \rightarrow 1} \frac{\Delta(1 ; x)}{\sqrt{2 x^{3}-3 x^{2}+2}-1}$.
