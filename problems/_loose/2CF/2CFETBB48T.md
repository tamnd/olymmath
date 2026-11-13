---
tag: 2CFETBB48T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h252301
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66189
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199215
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
If $ a$ , $ b$ , $ c$ , and $ d$ are the solutions of the equation $ x^4 - bx - 3 = 0$ , then an equation whose solutions are
$$ \frac {a + b + c}{d^2}, \frac {a + b + d}{c^2}, \frac {a + c + d}{b^2}, \frac {b + c + d}{a^2}
$$is

$ \textbf{(A)}\ 3x^4 + bx + 1 = 0 \textbf{(B)}\ 3x^4 - bx + 1 = 0 \textbf{(C)}\ 3x^4 + bx^3 - 1 = 0$
$ \textbf{(D)}\ 3x^4 - bx^3 - 1 = 0 \textbf{(E)}\ \text{none of these}$
