---
tag: S418NR7ETB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h2828109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45801
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242400
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2022
    source: hf-ai-mo-aops
    label: 2022 Kazakhstan National Olympiad
---
We define the function $Z(A)$ where we write the digits of $A$ in base $10$ form in reverse. (For example: $Z(521)=125$ ). Call a number $A$ $good$ if the first and last digits of $A$ are different, none of it's digits are $0$ and the equality: $$ Z(A^2)=(Z(A))^2 $$ happens. Find all such good numbers greater than $10^6$ .
