---
tag: YXBTYTQJMN
kind: problem
type: answer
answer: \sqrt{3}-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=13023
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's represent the left side of the equation as follows:

$$
\begin{gathered}
x^{4}+4 x-1=\left(x^{2}\right)^{2}+2 x^{2}-2 x^{2}+1-1+4 x-1= \\
=\left(x^{2}+1\right)^{2}-\left(2 x^{2}-4 x+2\right)=\left(x^{2}+1\right)^{2}-\left((\sqrt{2}(x-1))^{2}=\right. \\
=\left(x^{2}+1-\sqrt{2} x+\sqrt{2}\right)\left(x^{2}+1+\sqrt{2} x-\sqrt{2}\right)
\end{gathered}
$$

Then the original equation will be equivalent to the system of two equations:

1) $x^{2}-\sqrt{2} x+1+\sqrt{2}=0$, which has no roots because its discriminant is negative;
2) $x^{2}+\sqrt{2} x+1-\sqrt{2}=0$, which has roots $x_{1,2}=\frac{-1 \pm \sqrt{2 \sqrt{2}-1}}{\sqrt{2}}$.
