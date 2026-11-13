---
tag: FTT217ZDD2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h427576
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65692
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=257165
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
Let $(1+x+x^2)^n=a_0+a_1x+a_2x^2+...+a_{2n}x^{2n}$ be an identity in $x$ . If we lt $s=a_0+a_2+a_4+...+a_{2n}$ , then $s$ equals: $\text{(A)}\ 2^n \text{(B)}\ 2^n+1 \text{(C)}\ \dfrac{3^n-1}{2} \text{(D)}\ \dfrac{3^n}{2} \text{(E)}\ \dfrac{3^n+1}{2}$
