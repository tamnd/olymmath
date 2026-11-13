---
tag: KRHRPGMTDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Taiwan National Olympiad
    url: https://artofproblemsolving.com/community/c6h387701
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=61021
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253057
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2000
    source: hf-ai-mo-aops
    label: 2000 Taiwan National Olympiad
---
Consider the set $S=\{ 1,2,\ldots ,100\}$ and the family $\mathcal{P}=\{ T\subset S\mid |T|=49\}$ . Each $T\in\mathcal{P}$ is labelled by an arbitrary number from $S$ . Prove that there exists a subset $M$ of $S$ with $|M|=50$ such that for each $x\in M$ , the set $M\backslash\{ x\}$ is not labelled by $x$ .
