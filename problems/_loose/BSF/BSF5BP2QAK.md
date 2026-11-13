---
tag: BSF5BP2QAK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548765
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65402
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256875
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
A farmer divides his herd of $n$ cows among his four sons so that one son gets one-half the herd, a second son, one-fourth, a third son, one-fifth, and the fourth son, 7 cows. Then $n$ is: $ \textbf{(A)}\ 80 \textbf{(B)}\ 100 \textbf{(C)}\ 140 \textbf{(D)}\ 180 \textbf{(E)}\ 240 $
