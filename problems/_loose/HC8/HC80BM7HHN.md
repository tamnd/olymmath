---
tag: HC80BM7HHN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h257178
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65224
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198382
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
Each of the equations $ 3x^2-2=25$ , $ (2x-1)^2=(x-1)^2$ , $ \sqrt{x^2-7}=\sqrt{x-1}$ has:

$ \textbf{(A)}\ \text{two integral roots} \textbf{(B)}\ \text{no root greater than 3} \textbf{(C)}\ \text{no root zero}
\textbf{(D)}\ \text{only one root} \textbf{(E)}\ \text{one negative root and one positive root}$
