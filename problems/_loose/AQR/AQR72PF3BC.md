---
tag: AQR72PF3BC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h478844
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210269
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2012
    source: hf-ai-mo-aops
    label: 2012 Kazakhstan National Olympiad
---
The sequence $a_{n}$ defined as follows: $a_{1}=4, a_{2}=17$ and for any $k\geq1$ true equalities $a_{2k+1}=a_{2}+a_{4}+...+a_{2k}+(k+1)(2^{2k+3}-1)$ $a_{2k+2}=(2^{2k+2}+1)a_{1}+(2^{2k+3}+1)a_{3}+...+(2^{3k+1}+1)a_{2k-1}+k$ Find the smallest $m$ such that $(a_{1}+...a_{m})^{2012^{2012}}-1$ divided $2^{2012^{2012}}$
