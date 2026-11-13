---
tag: 4JQZANDSRB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 239 Open Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h2114260
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54787
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-239-open/2001
    source: hf-ai-mo-aops
    label: 2001 239 Open Mathematical Olympiad
---
For any positive numbers $ a_1 , a_2 , \dots, a_n $ prove the inequality $$ \left( 1\!+\!\frac{1}{a_1(1+a_1)} \!\right) \left( 1\!+\!\frac{1}{a_2(1+a_2)} \right) \dots \left( 1\!+\!\frac{1}{a_n(1+a_n)} \right) \geq
\left( 1\!+\!\frac{1}{p(1+p)} \right)^{ n} , $$ where $p=\sqrt[n]{a_1 a_2 \dots a_n}$ .
