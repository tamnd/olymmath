---
tag: ACDX9BTZR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Vietnam National Olympiad
    url: https://artofproblemsolving.com/community/c6h3228590
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=2308
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: vn-vmo/2024
    source: hf-ai-mo-aops
    label: 2024 Vietnam National Olympiad
---
For each polynomial $P(x)$ , define $$ P_1(x)=P(x), \forall x \in \mathbb{R}, $$ $$ P_2(x)=P(P_1(x)), \forall x \in \mathbb{R}, $$ $$ ... $$ $$ P_{2024}(x)=P(P_{2023}(x)), \forall x \in \mathbb{R}. $$ Let $a>2$ be a real number. Is there a polynomial $P$ with real coefficients such that for all $t \in (-a, a)$ , the equation $P_{2024}(x)=t$ has $2^{2024}$ distinct real roots?
