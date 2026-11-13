---
tag: B86MA4MGQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h282698
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65355
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198450
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
If $ P = \frac{s}{(1 + k)^n}$ then $ n$ equals:

$ \textbf{(A)}\ \frac{\log{\left(\frac{s}{P}\right)}}{\log{(1 + k)}}
\textbf{(B)}\ \log{\left(\frac{s}{P(1 + k)}\right)}
\textbf{(C)}\ \log{\left(\frac{s - P}{1 + k}\right)}
\textbf{(D)}\ \log{\left(\frac{s}{P}\right)} + \log{(1 + k)}
\textbf{(E)}\ \frac{\log{(s)}}{\log{(P(1 + k))}}$
