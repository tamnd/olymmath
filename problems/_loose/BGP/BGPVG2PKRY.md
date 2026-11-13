---
tag: BGPVG2PKRY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any triangle $A B C$, let $d$ denote the length of the incircle diameter, $g$ the length of the longest side, and $\epsilon$ the size of the smallest angle of the triangle $A B C$.

a) Prove: There exists a constant $K$ such that for every triangle $A B C$, the following inequality (1) holds:

$$
\frac{1}{d} < \frac{K}{g \sin \epsilon}
$$

b) Among all constants $K$ for which the statement to be proven in a) holds, determine the smallest constant, if it exists.
