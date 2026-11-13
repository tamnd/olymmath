---
tag: FQ4SNJTQ2X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1994 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2004999
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49481
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/1994
    source: hf-ai-mo-aops
    label: 1994 Abels Math Contest (Norwegian MO)
---
Let $x_1,x_2,...,x_{1994}$ be positive real numbers. Prove that $$ \left(\frac{x_1}{x_2}\right)^{\frac{x_1}{x_2}}\left(\frac{x_2}{x_3}\right)^{\frac{x_2}{x_3}}...\left(\frac{x_{1993}}{x_{1994}}\right)^{\frac{x_{1993}}{x_{1994}}} \ge \left(\frac{x_1}{x_2}\right)^{\frac{x_2}{x_1}}\left(\frac{x_2}{x_3}\right)^{\frac{x_3}{x_2}}...\left(\frac{x_{1993}}{x_{1994}}\right)^{\frac{x_{1994}}{x_{1993}}} $$
