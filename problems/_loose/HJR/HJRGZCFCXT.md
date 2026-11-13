---
tag: HJRGZCFCXT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h590594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66078
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199087
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
Three fair dice are tossed at random (i.e., all faces have the same probability of coming up). What is the probability that the three numbers turned up can be arranged to form an arithmetic progression with common difference one? $\textbf{(A) }\frac{1}{6} \textbf{(B) }\frac{1}{9} \textbf{(C) }\frac{1}{27} \textbf{(D) }\frac{1}{54} \textbf{(E) }\frac{7}{36}$
