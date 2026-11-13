---
tag: XSNATC6MVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h1557181
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42255
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238840
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2017
    source: hf-ai-mo-aops
    label: 2017 India IMO Training Camp
---
Let $a,b,c$ be distinct positive real numbers with $abc=1$ . Prove that $$ \sum_{\text{cyc}} \frac{a^6}{(a-b)(a-c)}>15. $$
