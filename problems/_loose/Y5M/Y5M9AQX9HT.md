---
tag: Y5M9AQX9HT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=236863
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An approximate construction of a regular pentagon goes as follows. Inscribe an arbitrary convex pentagon $P_1P_2P_3P_4P_5$ in a circle. Now choose an arror bound $\epsilon > 0$ and apply the following procedure.
(a) Denote $P_0 = P_5$ and $P_6 = P_1$ and construct the midpoint $Q_i$ of the circular arc $P_{i-1}P_{i+1}$ containing $P_i$.
(b) Rename the vertices $Q_1,...,Q_5$ as $P_1,...,P_5$.
(c) Repeat this procedure until the difference between the lengths of the longest and the shortest among the arcs $P_iP_{i+1}$ is less than $\epsilon$.
Prove this procedure must end in a finite time for any choice of $\epsilon$ and the points $P_i$.
