---
tag: MX1D8MTKGY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455350
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66427
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257899
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
In a certain cross-country meet between two teams of five runners each, a runner who finishes in the $n^{th}$ position contributes $n$ to his team's score. The team with the lower score wins. If there are no ties among the runners, how many different winning scores are possible? $ \textbf{(A)}\ 10 \textbf{(B)}\ 13 \textbf{(C)}\ 27 \textbf{(D)}\ 120 \textbf{(E)}\ 126 $
