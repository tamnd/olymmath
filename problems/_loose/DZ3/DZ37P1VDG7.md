---
tag: DZ37P1VDG7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h110681
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44303
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240576
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Iran MO (3rd Round)
---
Assume that $C$ is a convex subset of $\mathbb R^{d}$ . Suppose that $C_{1},C_{2},\dots,C_{n}$ are translations of $C$ that $C_{i}\cap C\neq\emptyset$ but $C_{i}\cap C_{j}=\emptyset$ . Prove that $$n\leq 3^{d}-1$$ Prove that $3^{d}-1$ is the best bound.
P.S. In the exam problem was given for $n=3$ .
