---
tag: TASD9CNK3Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=76974
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic 65th Czech and Slovak Mathematical Olympiad
---
Let $A B C$ be a triangle with the shortest side $B C$. Let $X, Y, K, L$ be a points on sides $A B, A C$ and on ray's opposite to rays $B C, C B$ respectively such that $B X=B K=B C=C Y=C L$. Line $K X$ intersects line $L Y$ in a point $M$. Prove that centroid of a triangle KLM coincides with incentre of the triangle $A B C$.

(Tomáš Jurík)
