---
tag: YHNQGY6XSN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Bangladesh Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3013592
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30893
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204245
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bd-bdmo/2023
    source: hf-ai-mo-aops
    label: 2023 Bangladesh Mathematical Olympiad
---
Let all possible $2023$ -degree real polynomials: $P(x)=x^{2023}+a_1x^{2022}+a_2x^{2021}+\cdots+a_{2022}x+a_{2023}$ ,
where $P(0)+P(1)=0$ , and the polynomial has 2023 real roots $r_1, r_2,\cdots r_{2023}$ [not necessarily distinct] so that $0\leq r_1,r_2,\cdots r_{2023}\leq1$ . What is the maximum value of $r_1 \cdot r_2 \cdots r_{2023}?$
