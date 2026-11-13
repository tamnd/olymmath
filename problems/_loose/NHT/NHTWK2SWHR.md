---
tag: NHTWK2SWHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f: \mathbb{R}^2 \to \mathbb{R}^2$ be a function having the following property: For any two points $A$ and $B$ in $\mathbb{R}^2$, the distance between $A$ and $B$ is the same as the distance between the points $f(A)$ and $f(B)$.

Denote the unique straight line passing through $A$ and $B$ by $l(A,B)$

(a) Suppose that $C,D$ are two fixed points in $\mathbb{R}^2$. If $X$ is a point on the line $l(C,D)$, then show that $f(X)$ is a point on the line $l(f(C),f(D))$.

(b) Consider two more point $E$ and $F$ in $\mathbb{R}^2$ and suppose that $l(E,F)$ intersects $l(C,D)$ at an angle $\alpha$. Show that $l(f(C),f(D))$ intersects $l(f(E),f(F))$ at an angle $\alpha$. What happens if the two lines $l(C,D)$ and $l(E,F)$ do not intersect? Justify your answer.
