---
tag: 3TRJRWBWZZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h437032
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66414
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257886
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
Suppose that $p$ and $q$ are positive numbers for which $$ \log_{9}(p) = \log_{12}(q) = \log_{16}(p+q) $$ What is the value of $\frac{q}{p}$ ? $\textbf{(A)}\ \frac{4}{3} \textbf{(B)}\ \frac{1+\sqrt{3}}{2} \textbf{(C)}\ \frac{8}{5} \textbf{(D)}\ \frac{1+\sqrt{5}}{2} \textbf{(E)}\ \frac{16}{9} $
