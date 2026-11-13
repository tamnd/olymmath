---
tag: 2WJJ5N6ADT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h63688
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66438
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199432
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
The set of all numbers x for which $$x+\sqrt{x^{2}+1}-\frac{1}{x+\sqrt{x^{2}+1}}$$ is a rational number is the set of all: $\textbf{(A)}\ \text{ integers } x \textbf{(B)}\ \text{ rational } x \textbf{(C)}\ \text{ real } x \textbf{(D)}\ x \text{ for which } \sqrt{x^2+1} \text{ is rational} \textbf{(E)}\ x \text{ for which } x+\sqrt{x^2+1} \text{ is rational }$
