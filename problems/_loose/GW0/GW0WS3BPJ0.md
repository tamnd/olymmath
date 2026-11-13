---
tag: GW0WS3BPJ0
kind: problem
type: answer
answer: p\in(-3,-1)\cup(0,2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161503
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given points $A(1,0)$ and $B(4,3)$. For a real number $p$, denote by $N_{p}$ the point on the line $AB$ that is closest to the circle

$$
(x-p)^{2}+\left(y-1-p^{2}\right)^{2}=1
$$

(under the distance of a point from a circle, we mean the distance from that point to the nearest point on the circle). For which values of the parameter $p$ is the point $N_{p}$ strictly between points $A$ and $B$?
