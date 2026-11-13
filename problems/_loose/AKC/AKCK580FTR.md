---
tag: AKCK580FTR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1065741
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=12865
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=214773
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2015
    source: hf-ai-mo-aops
    label: 2015 NIMO Problems
---
Let $ABC$ be a triangle with $AB=5$ , $BC=7$ , and $CA=8$ . Let $D$ be a point on $BC$ , and define points $B'$ and $C'$ on line $AD$ (or its extension) such that $BB'\perp AD$ and $CC'\perp AD$ . If $B'A=B'C'$ , then the ratio $BD:DC$ can be expressed in the form $m:n$ , where $m$ and $n$ are relatively prime positive integers. Compute $100m+n$ .

*Proposed by Michael Ren*
