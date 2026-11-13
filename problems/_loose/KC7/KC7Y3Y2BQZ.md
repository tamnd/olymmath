---
tag: KC7Y3Y2BQZ
kind: problem
type: answer
answer: \frac{1}{AB} + \frac{1}{AC} > \frac{1}{CS}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204573
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABC$ be an acute triangle such that $AB<AC$ and $AB<BC$. Let $P$ be a point on the segment $BC$ such that $\angle APB = \angle BAC$. The tangent to the circumcircle of triangle $ABC$ at $A$ meets the circumcircle of triangle $APB$ at $Q \neq A$. Let $Q'$ be the reflection of $Q$ with respect to the midpoint of $AB$. The line $PQ$ meets the segment $AQ'$ at $S$. Prove that
$$\frac{1}{AB}+\frac{1}{AC} > \frac{1}{CS}.$$

*Proposed by Nikola Velov*
