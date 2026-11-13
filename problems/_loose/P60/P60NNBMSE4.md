---
tag: P60NNBMSE4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 China Western Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h3127987
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=36561
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234483
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-wmo/2023
    source: hf-ai-mo-aops
    label: 2023 China Western Mathematical Olympiad
---
Let ${p}$ be a prime. $a,b,c\in\mathbb Z,\gcd(a,p)=\gcd(b,p)=\gcd(c,p)=1.$ Prove that: $\exists x_1,x_2,x_3,x_4\in\mathbb Z,| x_1|,|x_2|,|x_3|,|x_4|<\sqrt p,$ satisfying $$ ax_1x_2+bx_3x_4\equiv c\pmod p. $$ *Proposed by Wang Guangting*
