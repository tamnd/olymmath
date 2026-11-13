---
tag: SZ2ZMBBN44
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Romanian Master of Mathematics Shortlist
    url: https://artofproblemsolving.com/community/c6h1868877
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=27653
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228041
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A frog trainer places one frog at each vertex of an equilateral triangle $ABC$ of unit sidelength. The trainer can make one frog jump over another along the line joining the two, so that the total length of the jump is an even multiple of the distance between the two frogs just before the jump. Let $M$ and $N$ be two points on the rays $AB$ and $AC$ , respectively, emanating from $A$ , such that $AM = AN = \ell$ , where $\ell$ is a positive integer. After a finite number of jumps, the three frogs all lie in the triangle $AMN$ (inside or on the boundary), and no more jumps are performed.
Determine the number of final positions the three frogs may reach in the triangle $AMN$ . (During the process, the frogs may leave the triangle $AMN$ , only their nal positions are to be in that triangle.)
