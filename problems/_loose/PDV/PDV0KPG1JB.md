---
tag: PDV0KPG1JB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252984
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We define $$f(x,y,z)=|xy|\sqrt{x^2+y^2}+|yz|\sqrt{y^2+z^2}+|zx|\sqrt{z^2+x^2}.$$
Find the best constants $c_1,c_2\in\mathbb{R}$ such that $$c_1(x^2+y^2+z^2)^{3/2}\leq f(x,y,z)\leq c_1(x^2+y^2+z^2)^{3/2}$$ hold for all reals $x,y,z$ satisfying $x+y+z=0$.

*Proposed by Untro368.*
