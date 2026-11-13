---
tag: G9S0QG4KQT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0001.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\triangle ABC$ be an acute triangle such that $|AB| + |BC| = 4|AC|$ and $|AB| < |BC|$. Let $D$ be the intersection of the bisector of $\angle ABC$ with the side $AC$. Points $P$ and $Q$ lie on segment $BD$ such that $|BP| = 2|DQ|$. Let $\ell$ be the line through $P$ parallel to $AC$. The line through $Q$ perpendicular to $BD$ intersects the segments $AB$ and $BC$ in $X$ and $Y$, respectively. Suppose that both $X$ and $Y$ lie on the opposite side of $\ell$ to $B$.
An ant starts their journey in $X$ and goes from there to a point on $AC$, then a point on $\ell$, then back to a (possibly different) point on $AC$ and finally to $Y$. Prove that the length of the ant's shortest possible route is equal to $4|XY|$.
