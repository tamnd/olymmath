---
tag: HVDBVK7TH8
kind: problem
type: answer
answer: "8.5"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=5365
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
It is known that $x=2026$, find $y=BC$. The answer is 90.02.

IV-A. Define $f(a)$ as the function equal to the number of distinct solutions to the equation

$$
\sin \frac{a \pi x}{x^{2}+1} + \cos \frac{\pi (x^{2} + 4 a x + 1)}{4 x^{2} + 4} = \sqrt{2 - \sqrt{2}}
$$

For example, $f(a_1) = 3$ means that when $a = a_1$, the equation has three distinct solutions $x_1, x_2, x_3$. If the equation has no solutions when $a = a_0$, then we set $f(a_0) = 0$.

Solve the inequality $f(a) \leqslant 5$. In the answer, write the total length of the resulting intervals, rounding it to two decimal places if necessary. If there are no solutions, write the number 0; if the resulting length is infinite, write the number 9999.
