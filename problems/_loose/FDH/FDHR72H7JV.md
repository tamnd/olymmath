---
tag: FDHR72H7JV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h56824
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=66065
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=199086
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
If $i^2 = -1$ , then the sum
$$ \cos{45^\circ} + i\cos{135^\circ} + \cdots + i^n\cos{(45 + 90n)^\circ} $$
$$ + \cdots + i^{40}\cos{3645^\circ} $$
equals
$$ \text{(A)}\ \frac{\sqrt{2}}{2} \text{(B)}\ -10i\sqrt{2} \text{(C)}\ \frac{21\sqrt{2}}{2} $$
$$ \text{(D)}\ \frac{\sqrt{2}}{2}(21 - 20i) \text{(E)}\ \frac{\sqrt{2}}{2}(21 + 20i) $$
