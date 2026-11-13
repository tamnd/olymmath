---
tag: K76KSHRYC8
kind: problem
type: answer
answer: \frac{S_{PQRSTF}}{S_{ABC}} = 1 - \frac{ab + ac + bc}{(a + b + c)^2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$ABC$ is an arbitrary triangle. $A',B',C'$ are midpoints of arcs $BC, AC, AB$. Sides of triangle $ABC$, intersect sides of triangle $A'B'C'$ at points $P,Q,R,S,T,F$. Prove that $$\frac{S_{PQRSTF}}{S_{ABC}}=1-\frac{ab+ac+bc}{(a+b+c)^{2}}$$
