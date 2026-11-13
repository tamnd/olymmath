---
tag: VDHKTMV7E3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h380204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44013
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1991
    source: hf-ai-mo-aops
    label: 1991 Iran MO (2nd round)
---
Let $f : \mathbb R \to \mathbb R$ be a function such that $f(1)=1$ and
$$f(x+y)=f(x)+f(y)$$
And for all $x \in \mathbb R / \{0\}$ we have $f\left( \frac 1x \right) = \frac{1}{f(x)}.$ Find all such functions $f.$
