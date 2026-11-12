---
tag: YTTRDM04XF
kind: problem
type: answer
answer: "4.33"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=4935
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of positive numbers $x, y$ that satisfy the equation

$$
\begin{aligned}
& \frac{4 x^{2} y+6 x^{2}+2 x y-4 x}{3 x-y-2}+\sin \left(\frac{3 x^{2}+x y+x-y-2}{3 x-y-2}\right)=2 x y+y^{2}+\frac{x^{2}}{y^{2}}+\frac{2 x}{y}+ \\
& +\frac{2 x y\left(x^{2}+y^{2}\right)}{(3 x-y-2)^{2}}+\frac{1}{(x+y)^{2}}\left(x^{2} \sin \frac{(x+y)^{2}}{x}+y^{2} \sin \frac{(x+y)^{2}}{y^{2}}+2 x y \sin \frac{(x+y)^{2}}{3 x-y-2}\right)
\end{aligned}
$$

In the answer, write the sum of the values $x^{2}+y^{2}$ for all obtained pairs of solutions $(x, y)$, rounding to two decimal places if necessary. If there are no solutions, write -1; if there are infinitely many solutions, write -2.
