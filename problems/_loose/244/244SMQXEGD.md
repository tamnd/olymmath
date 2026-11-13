---
tag: 244SMQXEGD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h381485
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54028
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247578
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2002
    source: hf-ai-mo-aops
    label: 2002 Romania National Olympiad
---
Find all real polynomials $f$ and $g$ , such that:
$$(x^2+x+1)\cdot f(x^2-x+1)=(x^2-x+1)\cdot g(x^2+x+1), $$
for all $x\in\mathbb{R}$ .
