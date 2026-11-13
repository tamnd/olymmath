---
tag: 1X0X5MAAK1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h67924
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66705
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199692
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
How many different prime numbers are factors of $ N$ if
$$ \log_2 (\log_3 (\log_5 (\log_7 N))) = 11?
$$ $ \textbf{(A)}\ 1 \textbf{(B)}\ 2 \textbf{(C)}\ 3 \textbf{(D)}\ 4 \textbf{(E)}\ 7$
