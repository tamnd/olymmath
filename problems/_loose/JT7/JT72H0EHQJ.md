---
tag: JT72H0EHQJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h2349580
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44413
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2020
    source: hf-ai-mo-aops
    label: 2020 Iran MO (3rd Round)
---
let $a_1,a_2,...,a_n$ , $b_1,b_2,...,b_n$ , $c_1,c_2,...,c_n$ be real numbers. prove that $$ \sum_{cyc}{ \sqrt{\sum_{i \in \{1,...,n\} }{ (3a_i-b_i-c_i)^2}}} \ge \sum_{cyc}{\sqrt{\sum_{i \in \{1,2,...,n\}}{a_i^2}}} $$
