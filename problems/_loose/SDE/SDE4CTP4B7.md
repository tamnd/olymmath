---
tag: SDE4CTP4B7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2027152
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36253
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234801
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2000
    source: hf-ai-mo-aops
    label: 2000 National High School Mathematics League
---
$C_0:x^2+y^2=1,C_1:\frac{x^2}{a^2}+\frac{y^2}{b^2}(a>b>0)$ . Find all $(a,b)$ such that for any point $P$ on $C_1$ , we can find a parallelogram with an apex $P$ , and it is externally tangent to $C_0$ , inscribed to $C_1$ .
