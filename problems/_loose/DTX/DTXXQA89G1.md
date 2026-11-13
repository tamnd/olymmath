---
tag: DTXXQA89G1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1991 National High School Mathematics League
    url: https://artofproblemsolving.com/community/c6h2016341
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36087
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93517
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/1991
    source: hf-ai-mo-aops
    label: 1991 National High School Mathematics League
---
$S=\{(x,y)|x^2-y^2 \text{is odd},x,y\in\mathbb{R}\},T=\{(x,y)|\sin(2\pi x^2)-\sin(2\pi y^2)=\cos(2\pi x^2)-\cos(2\pi y^2),x,y\in\mathbb{R}\}$ , then $\text{(A)}S\subset T \text{(B)}T\subset S \text{(C)}S=T \text{(D)}S\cap T=\varnothing$
