---
tag: BMJC8AMK39
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255748
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65108
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198277
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
Given the larger of two circles with center $ P$ and radius $ p$ and the smaller with center $ Q$ and radius $ q$ . Draw $ PQ$ . Which of the following statements is false?
$ \textbf{(A)}\ p-q\text{ can be equal to }\overline{PQ}
\textbf{(B)}\ p+q\text{ can be equal to }\overline{PQ}
\textbf{(C)}\ p+q\text{ can be less than }\overline{PQ}
\textbf{(D)}\ p-q\text{ can be less than }\overline{PQ}
\textbf{(E)}\ \text{none of these}$
