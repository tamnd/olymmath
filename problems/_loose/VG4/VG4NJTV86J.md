---
tag: VG4NJTV86J
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h255795
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65141
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256614
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
If $ x$ is greater than zero, then the correct relationship is:
$ \textbf{(A)}\ \log (1+x) = \frac{x}{1+x} \textbf{(B)}\ \log (1+x) < \frac{x}{1+x}
\textbf{(C)}\ \log(1+x) > x \textbf{(D)}\ \log (1+x) < x \textbf{(E)}\ \text{none of these}$
