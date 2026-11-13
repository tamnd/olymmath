---
tag: XXD6FPZ99T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=172446
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a convex function, and let $u_{1} \geq u_{2} \geq \ldots \geq u_{k}$ and $v_{1} \geq v_{2} \geq \ldots \geq v_{k}$. Define

$$
D_{1}=\frac{f\left(v_{1}\right)-f\left(u_{1}\right)}{v_{1}-u_{1}}, D_{2}=\frac{f\left(v_{2}\right)-f\left(u_{2}\right)}{v_{2}-u_{2}}, \ldots, D_{k}=\frac{f\left(v_{k}\right)-f\left(u_{k}\right)}{v_{k}-u_{k}}
$$

and

$$
U_{1}=u_{1}, U_{2}=u_{1}+u_{2}, \ldots, U_{k}=u_{1}+u_{2}+\ldots+u_{k}
$$

and

$$
V_{1}=v_{1}, V_{2}=v_{1}+v_{2}, \ldots, V_{k}=v_{1}+v_{2}+\ldots+v_{k}
$$

Suppose

$$
U_{1}<V_{1}, U_{2}<V_{2}, \ldots, U_{k-1}<V_{k-1}, \text { but } U_{k}=V_{k}
$$

Show that in this case

$$
\begin{gathered}
U_{1}\left(D_{1}-D_{2}\right)+U_{2}\left(D_{2}-D_{3}\right)+\ldots+U_{k-1}\left(D_{k-1}-D_{k}\right)+ \\
+U_{k} D_{k}<V_{1}\left(D_{1}-D_{2}\right)+V_{2}\left(D_{2}-D_{3}\right)+\ldots+
\end{gathered}
$$

and

$$
u_{1} D_{1}+u_{2} D_{2}+\ldots+u_{k} D_{k}<v_{1} D_{1}+v_{2} D_{2}+\ldots+v_{k} D_{k}
$$
