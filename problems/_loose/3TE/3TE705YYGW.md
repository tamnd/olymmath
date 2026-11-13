---
tag: 3TE705YYGW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h550586
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65628
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198689
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
Let $y=(x-a)^2+(x-b)^2, a, b$ constants. For what value of $x$ is $y$ a minimum? $ \textbf{(A)}\ \frac{a+b}{2} \textbf{(B)}\ a+b \textbf{(C)}\ \sqrt{ab} \textbf{(D)}\ \sqrt{\frac{a^2+b^2}{2}} \textbf{(E)}\ \frac{a+b}{2ab} $
