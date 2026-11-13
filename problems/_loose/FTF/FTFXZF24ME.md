---
tag: FTFXZF24ME
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 China Second Round
    url: https://artofproblemsolving.com/community/c6h3152922
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35355
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233449
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2023
    source: hf-ai-mo-aops
    label: 2023 China Second Round
---
Let $a=1+10^{-4}$ . Consider some $2023\times 2023$ matrix with each entry a real in $[1,a]$ . Let $x_i$ be the sum of the elements of the $i$ -th row and $y_i$ be the sum of the elements of the $i$ -th column for each integer $i\in [1,n]$ . Find the maximum possible value of $\dfrac{y_1y_2\cdots y_{2023}}{x_1x_2\cdots x_{2023}}$ (the answer may be expressed in terms of $a$ ).
