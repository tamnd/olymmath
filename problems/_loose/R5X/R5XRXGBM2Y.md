---
tag: R5XRXGBM2Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h581533
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65640
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198703
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
Given two positive number $a$ , $b$ such that $a<b$ . Let A.M. be their arithmetic mean and let G.M. be their positive geometric mean. Then A.M. minus G.M. is always less than: $\textbf{(A) }\dfrac{(b+a)^2}{ab} \textbf{(B) }\dfrac{(b+a)^2}{8b} \textbf{(C) }\dfrac{(b-a)^2}{ab}$ $\textbf{(D) }\dfrac{(b-a)^2}{8a} \textbf{(E) }\dfrac{(b-a)^2}{8b}$
