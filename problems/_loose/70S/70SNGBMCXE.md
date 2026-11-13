---
tag: 70SNGBMCXE
kind: problem
type: answer
answer: "69"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Triangle $ABC$ has side lengths $AB=18$, $BC=36$, and $CA=24$. The circle $\Gamma$ passes through point $C$ and is tangent to segment $AB$ at point $A$.
Let $X$, distinct from $C$, be the second intersection of $\Gamma$ with $BC$. Moreover, let $Y$ be the point on $\Gamma$ such that segment $AY$ is an angle bisector of $\angle XAC$.
Suppose the length of segment $AY$ can be written in the form $AY=\frac{p\sqrt{r}}{q}$ where $p$, $q$, and $r$ are positive integers such that $gcd(p, q)=1$ and $r$ is square free.
Find the value of $p+q+r$.
