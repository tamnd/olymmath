---
tag: Z03BB9RYY5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h3107625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=761
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204413
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
Let $g:\mathbb{N}\to \mathbb{N}$ be a bijective function and suppose that $f:\mathbb{N}\to \mathbb{N}$ is a function such that:

- For all naturals $x$ , $$ \underbrace{f(\cdots (f}_{x^{2023} f\text{'s}}(x)))=x. $$
- For all naturals $x,y$ such that $x|y$ , we have $f(x)|g(y)$ .

Prove that $f(x)=x$ .

*Proposed by Pulkit Sinha*
