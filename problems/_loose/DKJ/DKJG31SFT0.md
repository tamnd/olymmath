---
tag: DKJG31SFT0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Miklós Schweitzer
    url: https://artofproblemsolving.com/community/c6h3271708
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42053
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: schweitzer/2023
    source: hf-ai-mo-aops
    label: 2023 Miklós Schweitzer
---
Let $G{}$ be an arbitrary finite group, and let $t_n(G)$ be the number of functions of the form $$f:G^n\to G, f(x_1,x_2,\ldots,x_n)=a_0x_1a_1\cdots x_na_n (a_0,\ldots,a_n\in G).$$Determine the limit of $t_n(G)^{1/n}$ as $n{}$ tends to infinity.
