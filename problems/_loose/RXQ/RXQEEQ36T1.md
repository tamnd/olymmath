---
tag: RXQEEQ36T1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h455104
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66575
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199597
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
In the sequence
$$ ..., a, b, c, d, 0, 1, 1, 2, 3, 5, 8,... $$
each term is the sum of the two terms to its left. Find $a$ . $ \textbf{(A)}\ -3 \textbf{(B)}\ -1 \textbf{(C)}\ 0 \textbf{(D)}\ 1 \textbf{(E)}\ 3 $
