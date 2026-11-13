---
tag: 4YFRPMQ7DK
kind: problem
type: answer
answer: VO = a*sqrt(2/3), VQ = a*sqrt(42)/42, and cos(angle between VQ and VO) = 5/(3*sqrt(7))
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0000.parquet#row=66
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $VABC$ be a regular tetrahedron of side length $a$ and points $M$, $N$ on the edges $VB$, $VC$, such that $VM = \frac{a}{3}$ and $VN = \frac{a}{6}$. If $Q$ is the projection of $V$ onto the plane $(AMN)$ and $O$ is the projection of $V$ onto the plane $(ABC)$, compute the lengths of the segments $VO$, $VQ$, and a trigonometric function of the angle between the straight lines $VQ$ and $VO$.
