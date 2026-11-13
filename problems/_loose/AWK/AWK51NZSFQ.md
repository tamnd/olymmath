---
tag: AWK51NZSFQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Argentina National Olympiad
    url: https://artofproblemsolving.com/community/c6h2996216
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29828
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229549
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2018
    source: hf-ai-mo-aops
    label: 2018 Argentina National Olympiad
---
There is a $50\times 50$ grid board.. Carlos is going to write a number in each box with the following procedure. He first chooses $100$ distinct numbers that we denote $f_1,f_2,f_3,…,f_{50},c_1,c_2,c_3,…,c_{50}$ among which there are exactly $50$ that they are rational. Then he writes in each box ( $i,j)$ the number $f_i \cdot c_j$ (the multiplication of $f_i$ by $c_j$ ). Determine the maximum number of rational numbers that the squares on the board can contain.
