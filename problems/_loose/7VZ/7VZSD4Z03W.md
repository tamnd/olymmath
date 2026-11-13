---
tag: 7VZSD4Z03W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Harvard-MIT Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h608945
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=71354
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=262142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hmmt/2000
    source: hf-ai-mo-aops
    label: 2000 Harvard-MIT Mathematics Tournament
---
$23$ frat brothers are sitting in a circle. One, call him Alex, starts with a gallon of water. On the first turn, Alex gives each person in the circle some rational fraction of his water. On each subsequent turn, every person with water uses the same scheme as Alex did to distribute his water, but in relation to themselves. For instance, suppose Alex gave $\frac{1}{2}$ and $\frac{1}{6}$ of his water to his left and right neighbors respectively on the first turn and kept $\frac{1}{3}$ for himself. On each subsequent turn everyone gives $\frac{1}{2}$ and $\frac{1}{6}$ of the water they started the turn with to their left and right neighbors, respectively, and keep the final third for themselves. After $23$ turns, Alex again has a gallon of water. What possibilities are there for the scheme he used in the first turn?
(Note: you may find it useful to know that $1+x+x^2+\cdot +x^{23}$ has no polynomial factors with rational coefficients)
