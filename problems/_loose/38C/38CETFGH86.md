---
tag: 38CETFGH86
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h498185
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65614
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198674
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
Given a square side of length $s$ . On a diagonal as base a triangle with three unequal sides is constructed so that its area equals that of the square. The length of the altitude drawn to the base is: ${{ \textbf{(A)}\ s\sqrt{2} \textbf{(B)}\ s/\sqrt{2} \textbf{(C)}\ 2s \textbf{(D)}\ 2\sqrt{s} } \textbf{(E)}\ 2/ \sqrt{s} } $
