---
tag: 6P06ZWPMGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h592606
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66109
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199113
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
In a room containing $N$ people, $N > 3$ , at least one person has not shaken hands with everyone else in the room. What is the maximum number of people in the room that could have shaken hands with everyone else? $\textbf{(A) }0 \textbf{(B) }1 \textbf{(C) }N-1 \textbf{(D) }N \textbf{(E) }\text{none of these}$
