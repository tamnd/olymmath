---
tag: FYM2DMCPFZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2031588
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36306
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234854
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2003
    source: hf-ai-mo-aops
    label: 2003 National High School Mathematics League
---
$A,B,C$ are points that three complex numbers $z_0=a\text{i},z_1=\frac{1}{2}+b\text{i},z_2=1+c\text{i}(a,b,c\in\mathbb{R})$ refer to on complex plane (not collinear). Prove that curve $Z=Z_0\cos^4t+2Z_1\cos^2t\sin^2t+Z_2\sin^4t(t\in\mathbb{R})$ has only one common point with the perpendicular bisector of $AC$ , and find the point.
