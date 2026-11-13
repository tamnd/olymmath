---
tag: S8HN4QXWEV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h589774
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66045
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199060
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
If $x$ cows give $x+1$ cans of milk in $x+2$ days, how many days will it take $x+3$ cows to give $x+5$ cans of milk? $\textbf{(A) }\frac{x(x+2)(x+5)}{(x+1)(x+3)} \textbf{(B) }\frac{x(x+1)(x+5)}{(x+2)(x+3)} $ $\textbf{(C) }\frac{(x+1)(x+3)(x+5)}{x(x+2)} \textbf{(D) }\frac{(x+1)(x+3)}{x(x+2)(x+5)} \textbf{(E) }\text{none of these}$
