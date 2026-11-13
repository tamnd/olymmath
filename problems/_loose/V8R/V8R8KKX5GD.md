---
tag: V8R8KKX5GD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h85770
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44545
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240783
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2006
    source: hf-ai-mo-aops
    label: 2006 Iran Team Selection Test
---
Let $ABC$ be an acute angle triangle.
Suppose that $D,E,F$ are the feet of perpendicluar lines from $A,B,C$ to $BC,CA,AB$ .
Let $P,Q,R$ be the feet of perpendicular lines from $A,B,C$ to $EF,FD,DE$ .
Prove that
$$ 2(PQ+QR+RP)\geq DE+EF+FD $$
