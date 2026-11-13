---
tag: 2BQPASGTTF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1339712
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14555
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216349
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $S$ be the set of all polynomials $Q(x,y,z)$ with coefficients in $\{0,1\}$ such that there exists a homogeneous polynomial $P(x,y,z)$ of degree $2016$ with integer coefficients and a polynomial $R(x,y,z)$ with integer coefficients so that $$P(x,y,z) Q(x,y,z) = P(yz,zx,xy)+2R(x,y,z)$$ and $P(1,1,1)$ is odd. Determine the size of $S$ .

Note: A homogeneous polynomial of degree $d$ consists solely of terms of degree $d$ .

*Proposed by Vincent Huang*
