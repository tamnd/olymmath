---
tag: GA0K9RBMCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2933941
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34433
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Chile National Olympiad
---
Juana and Juan have to write each one an ordered list of fractions so that the two lists have the same number of fractions and that the difference between the sum of all the fractions from Juana's list and the sum of all fractions from Juan's list is greater than $123$ .
The fractions in Juana's list are $$ \frac{1^2}{1}, \frac{2^2}{3},\frac{3^2}{5},\frac{4^2}{7},\frac{5^2}{9},... $$ And the fractions in John's list are $$ \frac{1^2}{3}, \frac{2^2}{5},\frac{3^2}{7},\frac{4^2}{9},\frac{5^2}{11},... $$ Find the least amount of fractions that each one must write to achieve the objective.
