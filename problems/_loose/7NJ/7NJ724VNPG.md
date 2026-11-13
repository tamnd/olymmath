---
tag: 7NJ724VNPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h548784
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65417
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=256890
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
A chemist has $m$ ounces of salt that is $m\%$ salt. How many ounces of salt must he add to make a solution that is $2m\%$ salt? $ \textbf{(A)}\ \frac{m}{100+m} \textbf{(B)}\ \frac{2m}{100-2m} \textbf{(C)}\ \frac{m^2}{100-2m} \textbf{(D)}\ \frac{m^2}{100+2m} \textbf{(E)}\ \frac{2m}{100+2m} $
