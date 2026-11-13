---
tag: 7KFMW6Y8NY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216118
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let there be a triangle $\triangle ABC$ with $BC=a$, $CA=b$, $AB=c$.
Let $T$ be a point not inside $\triangle ABC$ and on the same side of $A$ with respect to $BC$, such that $BT-CT=c-b$.
Let $n=BT$ and $m=CT$. Find the point $P$ that minimizes $f(P)=-a \cdot AP + m \cdot BP + n \cdot CP$.
