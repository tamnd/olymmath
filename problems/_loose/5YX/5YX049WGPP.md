---
tag: 5YX049WGPP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h445406
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66524
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199519
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
Let $i = \sqrt{-1}$ . Define a sequence of complex numbers by $z_{1} = 0, z_{n+1} = z_{n}^{2}+i$ for $n \ge 1$ . In the complex plane, how far from the origin is $z_{111}$ ? $ \textbf{(A)}\ 1 \textbf{(B)}\ \sqrt{2} \textbf{(C)}\ \sqrt{3} \textbf{(D)}\ \sqrt{110} \textbf{(E)}\ \sqrt{2^{55}} $
