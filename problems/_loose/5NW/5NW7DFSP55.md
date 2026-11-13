---
tag: 5NW7DFSP55
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h1780533
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48294
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Moldova National Olympiad
---
Let $a, b, n \in \mathbb{N}$ , with $a, b \geq 2.$ Also, let $I_{1}(n)=\int_{0}^{1} \left \lfloor{a^n x} \right \rfloor dx $ and $I_{2} (n) = \int_{0}^{1} \left \lfloor{b^n x} \right \rfloor dx.$ Find $\lim_{n \to \infty} \dfrac{I_1(n)}{I_{2}(n)}.$
