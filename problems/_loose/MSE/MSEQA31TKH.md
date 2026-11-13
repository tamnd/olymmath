---
tag: MSEQA31TKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h571083
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65637
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198698
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
If $\dfrac{a+b}{b+c}=\dfrac{c+d}{d+a}$ , then: $\textbf{(A)}\ a\text{ must equal }c \textbf{(B)}\ a+b+c+d\text{ must equal zero } $ $
\textbf{(C)}\ \text{either }a=c\text{ or }a+b+c+d=0,\text{ or both} $ $
\textbf{(D)}\ a+b+c+d\neq 0\text{ if }a=c \textbf{(E)}\ a(b+c+d)=c(a+b+d)$
