---
tag: ZEANYZ32Z7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h3139259
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44465
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240739
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2023
    source: hf-ai-mo-aops
    label: 2023 Iran MO (3rd Round)
---
For numbers $a,b \in \mathbb{R}$ we consider the sets: $$ A=\{a^n | n \in \mathbb{N}\} , B=\{b^n | n \in \mathbb{N}\} $$ Find all $a,b > 1$ for which there exists two real , non-constant polynomials $P,Q$ with positive leading coefficients st for each $r \in \mathbb{R}$ : $$ P(r) \in A \iff Q(r) \in B $$
