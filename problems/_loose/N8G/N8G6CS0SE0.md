---
tag: N8G6CS0SE0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h435965
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66400
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199396
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
Each integer $1$ through $9$ is written on a separate slip of paper and all nine slips are put into a hat. Jack picks one of these slips at random and puts it back. Then Jill picks a slip at random. Which digit is most likely to be the units digit of the **sum** of Jack's integer and Jill's integer? $ \textbf{(A)}\ 0 \textbf{(B)}\ 1 \textbf{(C)}\ 8 \textbf{(D)}\ 9 \textbf{(E)}\ \text{each digit is equally likely} $
