---
tag: GDXDQWXGFP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h1924918
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=18247
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219814
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2019
    source: hf-ai-mo-aops
    label: 2019 Romania Team Selection Test
---
Let be a natural number $ n\ge 3. $ Find $$ \inf_{\stackrel{ x_1,x_2,\ldots ,x_n\in\mathbb{R}_{>0}}{1=P\left( x_1,x_2,\ldots ,x_n\right)}}\sum_{i=1}^n\left( \frac{1}{x_i} -x_i \right) , $$ where $ P\left( x_1,x_2,\ldots ,x_n\right) :=\sum_{i=1}^n \frac{1}{x_i+n-1} , $ and find in which circumstances this infimum is attained.
