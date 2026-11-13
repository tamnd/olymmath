---
tag: HR4RC9E7BB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Canadian Mathematical Olympiad Qualification Repechage
    url: https://artofproblemsolving.com/community/c6h588442
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4720
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2010
    source: hf-ai-mo-aops
    label: 2010 Canadian Mathematical Olympiad Qualification Repechage
---
The Fibonacci sequence is dened by $f_1=f_2=1$ and $f_n=f_{n-1}+f_{n-2}$ for $n\ge 3$ . A Pythagorean triangle is a right-angled triangle with integer side lengths. Prove that $f_{2k+1}$ is the hypotenuse of a Pythagorean triangle for every positive integer $k$ with $k\ge 2$
