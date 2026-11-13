---
tag: ENMYAYEH17
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a quadrilateral pyramid $A B C D V$ with base $A B C D$. Its edges $A B$, $C D$ are parallel and planes $A B V$ and $C D V$ are perpendicular to each other. Let $P$ be the foot of the height $z$ from vertex $V$ to side $A B$ in triangle $A B V$ and $Q$ be the foot of the height $z$ from vertex $V$ to side $C D$ in triangle $C D V$. Prove the inequality

$$
|A V|^{2}+|B V|^{2}+|C V|^{2}+|D V|^{2} \geqq|P Q|^{2}+2\left(S_{A B V}+S_{C D V}+S_{P Q V}\right)
$$

where $S_{X Y Z}$ denotes the area of triangle $X Y Z$. Also, determine when equality holds.
