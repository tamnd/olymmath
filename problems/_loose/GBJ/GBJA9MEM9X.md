---
tag: GBJA9MEM9X
kind: problem
type: answer
answer: "4"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242929
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the smallest positive constant $k$ such that no matter what $3$ lattice points we choose the following inequality holds:
$$ L_{\max} - L_{\min} \ge \frac{1}{\sqrt{k} \cdot L_{max}} $$
where $L_{\max}$, $L_{\min}$ is the maximal and minimal distance between chosen points.
