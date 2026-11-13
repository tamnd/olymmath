---
tag: E5DTT36DNF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=117553
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a convex pentagon $A B C D E$ satisfying $C D=$ $D E, \angle E D C \neq 2 \angle A D B$. If point $P$ is inside the convex pentagon $A B C D E$, and satisfies $A P=A E, B P=B C$, prove: point $P$ lies on the diagonal $C E$ if and only if
$$
S_{\triangle B C D}+S_{\triangle A D E}=S_{\triangle A B D}+S_{\triangle A B P} .
$$
