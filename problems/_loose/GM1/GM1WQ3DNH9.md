---
tag: GM1WQ3DNH9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h60783
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66197
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199219
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
For all positive numbers $x,y,z$ the product $(x+y+z)^{-1}(x^{-1}+y^{-1}+z^{-1})(xy+yz+xz)^{-1}[(xy)^{-1}+(yz)^{-1}+(xz)^{-1}]$ equals

$\text{(A)}\ x^{-2}y^{-2}z^{-2} \text{(B)}\ x^{-2}+y^{-2}+z^{-2} \text{(C)}\ (x+y+z)^{-1}$
$\text{(D)}\ \frac{1}{xyz} \text{(E)}\ \frac{1}{xy+yz+xz}$
