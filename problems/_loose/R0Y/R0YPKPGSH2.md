---
tag: R0YPKPGSH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h592610
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66113
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199118
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
If $a,b,c$ are non-zero real numbers such that $$\frac{a+b-c}{c}=\frac{a-b+c}{b}=\frac{-a+b+c}{a},$$ and $$x=\frac{(a+b)(b+c)(c+a)}{abc},$$ and $x<0$ , then $x$ equals $\textbf{(A) }-1 \textbf{(B) }-2 \textbf{(C) }-4 \textbf{(D) }-6 \textbf{(E) }-8$
