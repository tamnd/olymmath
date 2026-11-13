---
tag: ZAW4G5F6VS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h281564
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65299
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256772
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
Through the use of theorems on logarithms
$$ \log{\frac{a}{b}} + \log{\frac{b}{c}} + \log{\frac{c}{d}} - \log{\frac{ay}{dx}}$$
can be reduced to:

$ \textbf{(A)}\ \log{\frac{y}{x}}
\textbf{(B)}\ \log{\frac{x}{y}}
\textbf{(C)}\ 1
\textbf{(D)}\ 0
\textbf{(E)}\ \log{\frac{a^2y}{d^2x}}$
