---
tag: BAE8AZBRC3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Miklos Schweitzer
    url: https://artofproblemsolving.com/community/c6h3456387
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2024
    source: hf-ai-mo-aops
    label: 2024 Miklos Schweitzer
---
Does there exist a nowhere dense, nonempty compact set $C \subset [0,1]$ such that
$$
\liminf_{h \to 0^+} \frac{\lambda(C \cap (x, x+h))}{h} > 0 \text{or} \liminf_{h \to 0^+} \frac{\lambda(C \cap (x-h, x))}{h} > 0
$$
holds for every point $x \in C$ , where $\lambda(A)$ denotes the Lebesgue measure of $A$ ?
