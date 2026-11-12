---
tag: FEAQ1PDHG5
kind: problem
type: answer
answer: m_{1}=\frac{3}{23}\approx0.13,m_{2}=\frac{8}{23}\approx0.35,m_{3}=\frac{12}{23}\approx0.52
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A pharmacist needs to prepare a mixture from three components $A$, $B$, and $C$ with the following composition: $a \% A, b \% B, c \% C$, but he does not have pure substances $A, B, C$. At his disposal are three different mixtures of these substances with the following compositions:
1) $a_{1} \% A, b_{1} \% B, c_{1} \% C$;
2) $a_{2} \% A, b_{2} \% B, c_{2} \% C$;
3) $a_{3} \% A, b_{3} \% B, c_{3} \% C$.

How can he prepare the required mixture? Solve this problem using the Gibbs triangle. You can illustrate the solution with a specific case, when

$$
\begin{array}{rlr}
a_{1}=10, & b_{1}=30, & c_{1}=60 \\
a_{2}=20, & b_{2}=60, & c_{2}=20 \\
a_{3}=80, & b_{3}=10, & c_{3}=10 \\
a=50, & b=30, & c=20
\end{array}
$$

(P. 221.)
