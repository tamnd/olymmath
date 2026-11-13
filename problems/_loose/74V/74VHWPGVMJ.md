---
tag: 74VHWPGVMJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2015506
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36051
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234599
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1989
    source: hf-ai-mo-aops
    label: 1989 National High School Mathematics League
---
If $M=\{z\in\mathbb{C}|z=\frac{t}{1+t}+\text{i}\frac{1+t}{t},t\in\mathbb{R},t\neq0,t\neq-1\}$ , $N=\{z\in\mathbb{C}|z=\sqrt2[\cos(\arcsin t)+\text{i}\cos(\arccos t)],t\in\mathbb{R},|t|\leq1\}$ ,
then $|M\cap N|$ is $\text{(A)}0 \text{(B)}1 \text{(C)}2 \text{(D)}4$
