---
tag: 2DPYJV9VHM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h428438
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6610
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208733
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Iran MO (3rd Round)
---
Prove that these three statements are equivalent:

(a) For every continuous function $f:S^n \to \mathbb R^n$ , there exists an $x\in S^n$ such that $f(x)=f(-x)$ .

(b) There is no antipodal mapping $f:S^n \to S^{n-1}$ .

(c) For every covering of $S^n$ with closed sets $A_0,\dots,A_n$ , there exists an index $i$ such that $A_i\cap -A_i\neq \emptyset$ .
