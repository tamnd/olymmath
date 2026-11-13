---
tag: P7Z7AZB2EZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h68766
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66716
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258187
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
Call a $ 7$ -digit telephone number $ d_1d_2d_3 - d_4d_5d_6d_7$ *memorable* if the prefix sequence $ d_1d_2d_3$ is exactly the same as either of the sequences $ d_4d_5d_6$ or $ d_5d_6d_7$ (possibly both). Assuming that each $ d_i$ can be any of the ten decimal digits $ 0,1,2,\ldots9$ , the number of different memorable telephone numbers is

$ \textbf{(A)}\ 19, 810 \textbf{(B)}\ 19, 910 \textbf{(C)}\ 19, 990 \textbf{(D)}\ 20, 000 \textbf{(E)}\ 20, 100$
