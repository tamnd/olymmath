---
tag: XGN3P4FQD7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h99394
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35818
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2003
    source: hf-ai-mo-aops
    label: 2003 China Team Selection Test
---
Given $S$ be the finite lattice (with integer coordinate) set in the $xy$ -plane. $A$ is the subset of $S$ with most elements such that the line connecting any two points in $A$ is not parallel to $x$ -axis or $y$ -axis. $B$ is the subset of integer with least elements such that for any $(x,y)\in S$ , $x \in B$ or $y \in B$ holds. Prove that $|A| \geq |B|$ .
