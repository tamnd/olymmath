---
tag: D2F9CGR8S9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287028
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44806
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241044
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2001
    source: hf-ai-mo-aops
    label: 2001 Irish Math Olympiad
---
Prove that for all positive integers $ n$ : $ \frac{2n}{3n+1} \le \sum_{k=n+1}^{2n}\frac{1}{k} \le \frac{3n+1}{4(n+1)}$ .
