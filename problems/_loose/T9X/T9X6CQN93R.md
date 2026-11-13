---
tag: T9X6CQN93R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h381300
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=43997
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1988
    source: hf-ai-mo-aops
    label: 1988 Iran MO (2nd round)
---
In tetrahedron $ABCD$ let $h_a, h_b, h_c$ and $h_d$ be the lengths of the altitudes from each vertex to the opposite side of that vertex. Prove that
$$\frac{1}{h_a} <\frac{1}{h_b}+\frac{1}{h_c}+\frac{1}{h_d}.$$
