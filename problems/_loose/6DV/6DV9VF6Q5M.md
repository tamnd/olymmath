---
tag: 6DV9VF6Q5M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2004 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h53057
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42219
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238804
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2004
    source: hf-ai-mo-aops
    label: 2004 India IMO Training Camp
---
Let $x_1, x_2 , x_3, .... x_n$ be $n$ real numbers such that $0 < x_j < \frac{1}{2}$ . Prove that $$ \frac{ \prod\limits_{j=1}^{n} x_j } { \left( \sum\limits_{j=1}^{n} x_j \right)^n} \leq \frac{ \prod\limits_{j=1}^{n} (1-x_j) } { \left( \sum\limits_{j=1}^{n} (1 - x_j) \right)^n} $$
