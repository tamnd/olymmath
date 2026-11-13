---
tag: TAZYSHNE15
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Do either $(1)$ or $(2)$
$(1)$ Let $A$ be matrix $(a_{ij}), 1 \leq i,j \leq 4.$ Let $d =$ det$(A),$ and let $A_{ij}$ be the cofactor of $a_{ij}$, that is, the determinant of the $3 \times 3$ matrix formed from $A$ by deleting $a_{ij}$ and other elements in the same row and column. Let $B$ be the $4 \times 4$ matrix $(A_{ij})$ and let $D$ be det $B.$ Prove $D = d^3$.

$(2)$ Let $P(x)$ be the quadratic $Ax^2 + Bx + C.$ Suppose that $P(x) = x$ has unequal real roots. Show that the roots are also roots of $P(P(x)) = x.$ Find a quadratic equation for the other two roots of this equation. Hence solve $(y^2 - 3y + 2)2 - 3(y^2 - 3y + 2) + 2 - y = 0.$
