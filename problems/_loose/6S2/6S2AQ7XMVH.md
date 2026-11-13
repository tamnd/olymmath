---
tag: 6S2AQ7XMVH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h528390
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66810
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=201830
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
Let $f_n(x)=\sin^n x + \cos^n x$ . For how many $x$ in $[0,\pi]$ is it true that
$$6f_4(x)-4f_6(x)=2f_2(x)?$$ $\textbf{(A) }2 \textbf{(B) }4 \textbf{(C) }6 \textbf{(D) }8 \textbf{(E) }\text{more than 8}$
