---
tag: QC86DN6C8R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h407001
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6570
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2011
    source: hf-ai-mo-aops
    label: 2011 India IMO Training Camp
---
Let $ABC$ be a triangle each of whose angles is greater than $30^{\circ}$ . Suppose a circle centered with $P$ cuts segments $BC$ in $T,Q; CA$ in $K,L$ and $AB$ in $M,N$ such that they are on a circle in counterclockwise direction in that order.Suppose further $PQK,PLM,PNT$ are equilateral. Prove that: $a)$ The radius of the circle is $\frac{2abc}{a^2+b^2+c^2+4\sqrt{3}S}$ where $S$ is area. $b) a\cdot AP=b\cdot BP=c\cdot PC.$
