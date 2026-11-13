---
tag: DMBYFXHG1E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2022 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h2959303
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42039
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2022
    source: hf-ai-mo-aops
    label: 2022 Miklós Schweitzer
---
Consider the integral $$ \int_{-1}^1 x^nf(x) dx $$ for every $n$ -th degree polynomial $f$ with integer coefficients. Let $\alpha_n$ denote the smallest positive real number that such an integral can give. Determine the limit value $$ \lim_{n\to \infty} \frac{\log \alpha_n}n. $$
