---
tag: 9DBRHHDE0Q
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 AMC 10
    url: https://artofproblemsolving.com/community/c6h248728
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=64281
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=200774
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: amc10
    source: hf-ai-mo-aops
    label: 2003 AMC 10
---
Simplify
$$ \sqrt[3]{x\sqrt[3]{x\sqrt[3]{x\sqrt{x}}}}
$$ $ \textbf{(A)}\ \sqrt{x} \textbf{(B)}\ \sqrt[3]{x^2} \textbf{(C)}\ \sqrt[27]{x^2} \textbf{(D)}\ \sqrt[54]{x} \textbf{(E)}\ \sqrt[81]{x^{80}}$
