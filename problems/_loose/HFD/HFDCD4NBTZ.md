---
tag: HFDCD4NBTZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 CentroAmerican
    url: https://artofproblemsolving.com/community/c6h381872
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22022
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223281
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: centro/2004
    source: hf-ai-mo-aops
    label: 2004 CentroAmerican
---
$ABC$ is a triangle, and $E$ and $F$ are points on the segments $BC$ and $CA$ respectively, such that $\frac{CE}{CB}+\frac{CF}{CA}=1$ and $\angle CEF=\angle CAB$ . Suppose that $M$ is the midpoint of $EF$ and $G$ is the point of intersection between $CM$ and $AB$ . Prove that triangle $FEG$ is similar to triangle $ABC$ .
