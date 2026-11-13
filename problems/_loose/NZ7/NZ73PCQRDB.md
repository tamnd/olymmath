---
tag: NZ73PCQRDB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168298
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A $P$ (convex) regular 9-gon has consecutive vertices $A_{1}, A_{2}, \ldots, A_{9}$.

Reflect $P$ over $A_{1}$ as the center, the image is $P_{1}$. Reflect this over $A_{2}$ to get $P_{2}$, and the subsequent images are obtained by reflecting over $A_{3}$, $\ldots, A_{0}$, finally resulting in $P_{9}$.

It is to be proven that $P_{9}$ can also be obtained from $P$ with a single reflection over a certain point. Where is the center of this reflection?
