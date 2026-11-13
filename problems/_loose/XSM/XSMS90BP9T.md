---
tag: XSMS90BP9T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282733
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65377
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198474
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
The numerator of a fraction is $ 6x + 1$ , then denominator is $ 7 - 4x$ , and $ x$ can have any value between $ -2$ and $ 2$ , both included. The values of $ x$ for which the numerator is greater than the denominator are:

$ \textbf{(A)}\ \frac{3}{5} < x \le 2
\textbf{(B)}\ \frac{3}{5} \le x \le 2
\textbf{(C)}\ 0 < x \le 2
\textbf{(D)}\ 0 \le x \le 2
\textbf{(E)}\ -2 \le x \le 2$
