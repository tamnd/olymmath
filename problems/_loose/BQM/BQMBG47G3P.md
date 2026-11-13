---
tag: BQMBG47G3P
kind: problem
type: answer
answer: 2,858,2,175,0,3216
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For the equations numbered 1330 and 1403,

$$
\begin{gathered}
x^{3}-x^{2}-6 x+2=0 \text { and } \\
x^{3}-13 x^{2}+40 x-4=0
\end{gathered}
$$

write down the cubic equations (I), (II), and (III) in sequence, with the coefficient of $x^{3}$ always set to 1, having the following properties:

- The roots of equation (I) are equal to the squares of the roots of equation (2), or in other words, the fourth powers of the roots of equation (1).
- The roots of equation (II) are equal to the squares of the roots of equation (I), or in other words, the eighth powers of the roots of equation (1).
- The roots of equation (III) are similarly equal to the sixteenth powers of the roots of equation (1). (It is sufficient to determine the first four significant digits of the coefficients, which are increasing in magnitude.)

Denoting the coefficients of $x^{2}$, $x$, and the constant term in equation (III) by $A$, $B$, and $C$ respectively, show that the following three numbers provide a good approximate value for the absolute value of the roots of equation (1):

$$
\sqrt[16]{-A}, \sqrt[16]{-B / A}, \sqrt[16]{-C / B}
$$

that is, each value or its negative approximately satisfies equation (1).

What is the relationship in magnitude between the absolute values of the roots obtained in sequence?
