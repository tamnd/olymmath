---
tag: EQJ9CX9E6Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Taiwan Mathematics Olympiad
    url: https://artofproblemsolving.com/community/c6h3246294
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2173
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253000
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=225
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Taiwan Mathematics Olympiad
  - at: tw-tst
    source: hf-mathnet
    label: Taiwan Taiwan Mathematical Olympiad
---
Suppose $O$ is the circumcenter of $\Delta ABC$ , and $E, F$ are points on segments $CA$ and $AB$ respectively with $E, F \neq A$ . Let $P$ be a point such that $PB = PF$ and $PC = PE$ .
Let $OP$ intersect $CA$ and $AB$ at points $Q$ and $R$ respectively. Let the line passing through $P$ and perpendicular to $EF$ intersect $CA$ and $AB$ at points $S$ and $T$ respectively. Prove that points $Q, R, S$ , and $T$ are concyclic.

*Proposed by Li4 and usjl*
