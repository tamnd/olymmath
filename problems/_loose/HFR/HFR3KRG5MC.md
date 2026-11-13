---
tag: HFR3KRG5MC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281614
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65325
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256798
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
A regular octagon is to be formed by cutting equal isosceles right triangles from the corners of a square. If the square has sides of one unit, the leg of each of the triangles has length:

$ \textbf{(A)}\ \frac{2 + \sqrt{2}}{3}
\textbf{(B)}\ \frac{2 - \sqrt{2}}{2}
\textbf{(C)}\ \frac{1 + \sqrt{2}}{2}
\textbf{(D)}\ \frac{1 + \sqrt{2}}{3}
\textbf{(E)}\ \frac{2 - \sqrt{2}}{3}$
