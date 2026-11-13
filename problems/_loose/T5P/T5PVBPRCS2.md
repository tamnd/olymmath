---
tag: T5PVBPRCS2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h70270
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66227
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257699
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
If $a>1$ , $b>1$ , and $p=\frac{\log_b(\log_ba)}{\log_ba}$ , then $a^n$ equals $\textbf {(A) } 1 \textbf {(B) } b \textbf {(C) } \log_ab \textbf {(D) } \log_ba \textbf {(E) } a^{\log_ba}$
