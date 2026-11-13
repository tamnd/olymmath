---
tag: SS0YVATGAW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2800885
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=88
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=203746
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2022
    source: hf-ai-mo-aops
    label: 2022 Caucasus Mathematical Olympiad
---
Paul can write polynomial $(x+1)^n$ , expand and simplify it, and after that change every coefficient by its reciprocal. For example if $n=3$ Paul gets $(x+1)^3=x^3+3x^2+3x+1$ and then $x^3+\frac13x^2+\frac13x+1$ . Prove that Paul can choose $n$ for which the sum of Paul's polynomial coefficients is less than $2.022$ .
