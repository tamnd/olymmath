---
tag: VFZ5WMK9ZT
kind: problem
type: answer
answer: a) -1/5; b) 5/36
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=16
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be a right triangle with $\angle ACB = 90^\circ$, $AC = 1$ and $BC = 2$. Given a point $A_1 \in BC$ such that $A_1C \neq \frac{1}{3}$ we construct a sequence of points $A_n \in BC$, $n \ge 2$ in the following way. Let $B_1$ be the intersection point of $AC$ and the line through $A_1$ and parallel to $AB$, and $C_1$ be the foot of the perpendicular from $B_1$ to $AB$. Then $A_2$ is the intersection point of $BC$ and the line through $C_1$ and parallel to $AC$. Using $A_2$ we construct $A_3$ in the same way, etc. Find:
a) $\frac{3A_2C - 1}{3A_1C - 1}$;
b) $\lim_{n \to \infty} S_{A_n B_n C_n}$.
