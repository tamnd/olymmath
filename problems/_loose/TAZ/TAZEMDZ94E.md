---
tag: TAZEMDZ94E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252100
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66684
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=258155
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
For positive integers $ n$ , denote by $ D(n)$ the number of pairs of different adjacent digits in the binary (base two) representation of $ n$ . For example, $ D(3) = D(11_2) = 0$ , $ D(21) = D(10101_2) = 4$ , and $ D(97) = D(110001_2) = 2$ . For how many positive integers $ n$ less than or equal to $ 97$ does $ D(n) = 2$ ? $ \textbf{(A)}\ 16
\textbf{(B)}\ 20
\textbf{(C)}\ 26
\textbf{(D)}\ 30
\textbf{(E)}\ 35$
