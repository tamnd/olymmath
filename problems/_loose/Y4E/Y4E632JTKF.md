---
tag: Y4E632JTKF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252082
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66677
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258148
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
For any positive integer $ n$ , let $$f(n) = \begin{cases} \log_8{n}, & \text{if }\log_8{n}\text{ is rational,}
0, & \text{otherwise.} \end{cases}$$ What is $ \sum_{n = 1}^{1997}{f(n)}$ ? $ \textbf{(A)}\ \log_8{2047} \textbf{(B)}\ 6 \textbf{(C)}\ \frac {55}{3} \textbf{(D)}\ \frac {58}{3} \textbf{(E)}\ 585$
